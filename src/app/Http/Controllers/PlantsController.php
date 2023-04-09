<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plant;


class PlantsController extends Controller
{
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
        return response()->json($responce);
    }

    protected function formatPlants($plants)
    {
        $format = function ($plant) {
            return [
                "id" => $plant['id'],
                "name" => $plant['name'],
                "description" => $plant['description'],
                "photo" => $plant['photo'],
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
