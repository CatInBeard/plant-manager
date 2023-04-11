<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Plant;
use App\Models\Watering;

class PlantsController extends Controller
{

    protected $NoImage = "/images/no_photo.png";

    public function get()
    {

        $plants = Plant::all();

        $formatted_plants = $this->formatPlants($plants);
        $responce = [
            "status" => "ok",
            "data" => [
                "plants" => $formatted_plants
            ]
        ];
        return response()->json($responce, 200);
    }

    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
                'name' => 'required|max:255',
                'description' => 'required',
                'watering_per_week' => 'required'
        ]);

        if($validator->fails()){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "Invalid params"
                ]
            ];
            return response()->json($responce, 400);
        }
        
        $validated = $validator->validated();

        $plant = Plant::create($validated);

        $plant_array = $plant->toArray();

        $plant_array['photo'] = $plant_array['photo'] == true ? $plant_array['photo'] : $this->NoImage;

        $responce = [
            "status" => "created",
            "data" => [
                "plant" => $plant_array
            ]
        ];
        return response()->json($responce, 201);
    }

    public function updateOne(Request $request)
    {

        $plantID = $request->route('id');

        $plant = Plant::find($plantID);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $plantID . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }


        $validator = Validator::make($request->all(), [
            'name' => 'max:255',
            'description' => '',
            'watering_per_week' => ''
        ]);

        if($validator->fails()){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "Invalid params"
                ]
            ];
            return response()->json($responce, 400);
        }
        
        $validated = $validator->validated();


        $plant->update($validated);



        $plant_array = $plant->toArray();
        $plant_array['photo'] = $plant_array['photo'] == true ? $plant_array['photo'] : $this->NoImage;


        $responce = [
            "status" => "updated",
            "data" => [
                "plant" => $plant_array
            ]
        ];

        return response()->json($responce, 200);
    }

    public function getOne(Request $request)
    {

        $plantID = $request->route('id');

        $plant = Plant::find($plantID);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $plantID . " not found"
                ]
            ];

            return response()->json($responce, 404);
        }

        $plant_array = $plant->toArray();
        $plant_array['photo'] = $plant_array['photo'] == true ? $plant_array['photo'] : $this->NoImage;

        $responce = [
            "status" => "found",
            "data" => [
                "plant" => $plant_array
            ]
        ];

        return response()->json($responce, 200);
    }

    public function deleteOne(Request $request)
    {

        $plantID = $request->route('id');

        $plant = Plant::find($plantID);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $plantID . " not found"
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

    public function addWatering(Request $request){
        $plantID = $request->route('id');

        $plant = Plant::find($plantID);

        if($plant == null){
            $responce = [
                "status" => "error",
                "error" => [
                    "text" => "ID " . $plantID . " not found"
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

    protected function formatPlant($plant) {

        $waterings = $plant->Waterings()->orderBy("created_at","DESC")->get();

        return [
            "id" => $plant->id,
            "name" => $plant->name,
            "description" => $plant->description,
            "photo" => $plant->photo == true ? $plant->photo : $this->NoImage, // $plant->photo ?? $this->NoImage does not work (Why?)
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
