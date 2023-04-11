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
                'text' => 'Invalid params'
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
                    "watering_per_week"=>1
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
        $response->assertStatus(201);

        $response->assertJson([
            'status' => "updated",
            "data" => [
                "plant" => [
                    "id" => $plantID,
                    "name" => "Edited Plant",
                    "description" => "description",
                    "watering_per_week"=>2
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
}
