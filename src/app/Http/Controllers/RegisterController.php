<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request) 
    {

        $validated = $request->validated();
        
        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);

        auth()->login($user);

        return redirect()->route('app');
    }
}
