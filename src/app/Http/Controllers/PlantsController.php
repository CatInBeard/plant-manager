<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlantsController extends Controller
{
    function get(){

        $plants = [

            [
                "id" => 1, 
                "photo" => "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
                "name" => "Plant1",
                "description" => "It is a plant",
                "care" => [
                    "week_watering_times" => 3,
                    "last_waterings" => [
                        [
                            "id"=> 5,
                            "date"=> "2022-04-08 16:45:12"
                        ],
                        [
                            "id" => 4,
                            "date" => "2022-04-07 13:42:22"
                        ]
                        ,
                        [
                            "id" => 3,
                            "date" => "2022-04-06 15:54:19"
                        ]
                    ]
                ]
            ],
            [
                "id" => 2, 
                "photo" => "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
                "name" => "Plant2",
                "description" => "It is a plant 2",
                "care" => [
                    "week_watering_times" => 5,
                    "last_waterings" => [
                        [
                            "id"=> 11,
                            "date"=> "2022-04-09 17:45:12"
                        ],
                        [
                            "id"=> 9,
                            "date"=> "2022-04-08 17:45:12"
                        ],
                        
                        [
                            "id" => 8,
                            "date" => "2022-04-07 13:42:22"
                        ]
                        ,
                        [
                            "id" => 6,
                            "date" => "2022-04-06 15:54:19"
                        ]
                    ]
                ]
            ]
            
        ];

        $responce = [
            "status" => "ok",
            "data" => [
                "plants" => $plants
            ]
        ];
        return response()->json($responce);
    }
}
