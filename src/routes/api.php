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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/plants", [PlantsController::class, 'get'])->name("plants");
Route::post("/plants", [PlantsController::class, 'create'])->name("plants.create");
Route::patch("/plants/{id}", [PlantsController::class, 'updateOne'])->name("plants.updateOne");
Route::get("/plants/{id}", [PlantsController::class, 'getOne'])->name("plants.getOne");
Route::delete("/plants/{id}", [PlantsController::class, 'deleteOne'])->name("plants.deleteOne");
Route::post("/plants/{id}/watering", [PlantsController::class, 'addWatering'])->name("plants.addWatering");
Route::post("/plants/{id}/photo", [PlantsController::class, 'addPhoto'])->name("plants.addPhoto");