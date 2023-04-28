<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout()
    {
        Session::flush();
        
        Auth::logout();

        return redirect()->route('auth.show');
    }
}
