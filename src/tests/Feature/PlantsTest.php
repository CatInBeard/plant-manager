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
}
