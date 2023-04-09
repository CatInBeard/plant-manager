<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WelcomeTest extends TestCase
{
    /**
     * Test that no 500 error
     */
    public function test_ok(): void
    {
        $response = $this->get('/');

        $response->assertOk();
    }
    /**
     * Test you can see linkg
     */
    public function test_find_app_link(): void
    {
        $response = $this->get('/');
        $response->assertSeeText("Go to the app", $escaped = false);
    }
}
