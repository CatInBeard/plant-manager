<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PlantsTest extends TestCase
{
    /**
     * Test that no 500 error
     */
    public function test_no_error(): void
    {
        $response = $this->get('/api/plants');

        $response->assertStatus(200);
    }

    public function test_check_get_answer(): void
    {
        $response = $this->get('/api/plants');
        $response->assertValid();
        $response->assertValid(['status', 'data']);
    }

    public function test_create_invalid_plant(): void
    {
        $response = $this->post('/api/plants');
        $response->assertStatus(400);
        $response->assertJson([
            'status' => 'error',
            'error' => [
                'validation' => []
            ]
        ]);
    }
    public function test_create_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "name",
            "description" => "description",
            "watering_per_week"=>1
        ]);
        $response->assertStatus(201);
        $response->assertJson([
            'status' => "created",
            "data" => [
                "plant" => [
                    "name" => "name",
                    "description" => "description",
                    "care" => [
                        "week_watering_times" => 1
                    ]
                ]
            ]
        ]);
    }

    public function test_edit_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "New Plant",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->patch('/api/plants/'. $plantID , 
        [
            "name" => "Edited Plant",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(200);

        $response->assertJson([
            'status' => "updated",
            "data" => [
                "plant" => [
                    "id" => $plantID,
                    "name" => "Edited Plant",
                    "description" => "description",
                    "care" => [
                        "week_watering_times" => 2
                    ]
                ]
            ]
        ]);
    }

    public function test_edit_plant_not_found(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "New Plant",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->patch('/api/plants/'. $plantID+100 , 
        [
            "name" => "Edited Plant",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(404);
    }

    public function test_getOne_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "PLANT",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->get('/api/plants/'. $plantID);
        $response->assertStatus(200);

        $response->assertJson([
            'status' => "found",
            "data" => [
                "plant" => [
                    "id" => $plantID,
                    "name" => "PLANT",
                    "description" => "description",
                    "care" => [
                        "week_watering_times" => 2
                    ]
                ]
            ]
        ]);
    }

    public function test_getOne_not_found_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "PLANT",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->get('/api/plants/'. $plantID+100);
        $response->assertStatus(404);
    }

    public function test_delete_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "This plant will be deleted",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->delete('/api/plants/'. $plantID);
        $response->assertStatus(200);

        $response = $this->get('/api/plants/'. $plantID);
        $response->assertStatus(404);
    }

    public function test_delete_not_found_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "This plant will be deleted",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->delete('/api/plants/'. $plantID);
        $response->assertStatus(200);

        $response = $this->get('/api/plants/'. $plantID);
        $response->assertStatus(404);

        $response = $this->delete('/api/plants/'. $plantID);
        $response->assertStatus(404);
    }
    public function test_watering_plant(): void
    {
        $response = $this->post('/api/plants', 
        [
            "name" => "This plant will be deleted",
            "description" => "description",
            "watering_per_week"=>2
        ]);
        $response->assertStatus(201);

        $plantID = $response->getData()->data->plant->id;

        $response = $this->post('/api/plants/'. $plantID . "/watering");
        $response->assertStatus(201);
        $response->assertJson([
            'status' => "created",
            "data" => []
        ]);
    }
}
