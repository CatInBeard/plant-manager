<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::middleware('guest')->group(function () {

Route::view('/', 'welcome')->name("welcome");    

Route::view("/signup","signup")->name("reg.show");

Route::post("/signup", [RegisterController::class, 'register'])->name("reg.post");

Route::view("/signin","signin")->name("auth.show");

Route::post("/signin", [LoginController::class, 'login'])->name("auth.post");

});

Route::middleware('auth')->group(function () {

Route::view('/app', 'app')->name("app");

Route::view('/app/{any}', 'app')->where('any', '.*');

});
