<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plant;
use Illuminate\Support\Facades\Validator;


class PlantsController extends Controller
{

    protected $NoImage = "/images/no_photo.png";

    public function get()
    {

        $plants = Plant::all();

        $formatted_plants = $this->formatPlants($plants->toArray());

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

        return response()->json($responce, 201);
    }

    protected function formatPlants($plants)
    {


        $format = function ($plant) {
            return [
                "id" => $plant['id'],
                "name" => $plant['name'],
                "description" => $plant['description'],
                "photo" => $plant['photo'] == true ? $plant['photo'] : $this->NoImage, // $plant['photo'] ?? $this->NoImage does not work (Why?)
                "care" => [
                    "week_watering_times" => $plant['watering_per_week'],
                    "last_waterings" => [

                    ]
                ]
            ];
        };

        return array_map($format, $plants);
    }
}
