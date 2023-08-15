<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Plant;
use App\Models\User;
use App\Models\Watering;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PlantStoreRequest;
use App\Http\Requests\PlantUpdateRequest;


class PlantsController extends Controller
{

    protected $NoImage = "/images/no_photo.png";

    public function index(Request $request)
    {

        $plants = $request->user()->plants()->orderBy("created_at","DESC")->get();

        $formatted_plants = $this->formatPlants($plants);
        $responce = [
            "status" => "ok",
            "data" => [
                "plants" => $formatted_plants
            ]
        ];
        return response()->json($responce, 200);
    }

    public function store(PlantStoreRequest $request)
    {

        $validated = $request->validated();

        $plant = Plant::create($validated);

        $plant->user_id = Auth::user()->id;
        $plant->save();;

        $responce = [
            "status" => "created",
            "data" => [
                "plant" => $this->formatPlant($plant)
            ]
        ];
        
        return response()->json($responce, 201);
    }

    public function update(PlantUpdateRequest $request, $id)
    {

        $plant = $request->user()->plants()->find($id);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $id . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }
        
        $validated = $request->validated();


        $plant->update($validated);


        $responce = [
            "status" => "updated",
            "data" => [
                "plant" => $this->formatPlant($plant)
            ]
        ];

        return response()->json($responce, 200);
    }

    public function show(Request $request, $id)
    {

        $plant = $request->user()->plants()->find($id);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $id . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }

        $responce = [
            "status" => "found",
            "data" => [
                "plant" => $this->formatPlant($plant)
            ]
        ];

        return response()->json($responce, 200);
    }

    public function destroy(Request $request, $id)
    {

        $plant = $request->user()->plants()->find($id);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $id . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }

        $plant->delete();

        $responce = [
            "status" => "deleted",
            "data" => [
            ]
        ];

        return response()->json($responce, 200);
    }

    public function addWatering(Request $request, $id){

        $plant = $request->user()->plants()->find($id);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $id . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }

        $watering = Watering::create(
            [
                "plant_id" => $plant->id
            ]
        );

        $responce = [
            "status" => "created",
            "data" => [
                "id" => $watering->id,
                "created_at" => $watering->created_at
            ]
        ];

        return response()->json($responce, 201);
    }

    public function addPhoto(Request $request, $id)
    {


        $plant = $request->user()->plants()->find($id);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $id . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }

        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg|max:6144',
        ]);

        if($validator->fails()){
            $responce = [
                "status" => "error",
                "error" => [
                    "validation" => $validator->errors()
                ]
            ];
            return response()->json($responce, 400);
        }

        $path = $request->file('image')->store('public/images');
        $plant->update([ "photo" => $request->file('image')->hashName() ]);

        $responce = [
            "status" => "created",
            "data" => [
                "plant" => $this->formatPlant($plant)
            ]
        ];
        return response()->json($responce, 200);
    }

    protected function formatPlant($plant) 
    {

        $waterings = $plant->Waterings()->orderBy("created_at","DESC")->get();

        return [
            "id" => $plant->id,
            "name" => $plant->name,
            "description" => $plant->description,
            "photo" => $plant->photo == true ? asset("storage/images/".$plant->photo) : $this->NoImage, // $plant->photo ?? $this->NoImage does not work (Why?)
            "care" => [
                "week_watering_times" => $plant->watering_per_week,
                "last_waterings" => $this->formatWaterings($waterings)
            ]
        ];
    }

    protected function formatPlants($plants)
    {

        $format = function($plant){
            return $this->formatPlant($plant);
        };

        return $plants->map($format);
    }

    protected function formatWaterings($waterings){
        $format = function($plant){
            return $this->formatWatering($plant);
        };
        return $waterings->map($format);
    }

    protected function formatWatering($watering){
        return [
            "id" => $watering->id,
            "date" => $watering->created_at,
        ];
    }
}
