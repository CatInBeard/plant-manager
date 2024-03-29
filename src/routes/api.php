<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PlantsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {

    Route::middleware('auth.api')->group(
        function () {

            Route::name('api.')->group(function () {
            
                Route::apiResource('/plants', PlantsController::class);

            });

            Route::post("/plants/{id}/watering", [PlantsController::class, 'addWatering'])->name("api.plants.addWatering");
            Route::post("/plants/{id}/photo", [PlantsController::class, 'addPhoto'])->name("api.plants.addPhoto");
        }
    );

});