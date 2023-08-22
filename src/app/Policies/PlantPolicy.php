<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Plant;
use Illuminate\Auth\Access\Response;


class PlantPolicy
{
    
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }
    
    public function view(User $user, Plant $plant): Response
    {
        return $user->id === $plant->user_id ? 
        Response::allow() :
        Response::denyAsNotFound();
    }

    public function destroy(User $user, Plant $plant): Response
    {
        return $user->id === $plant->user_id ? 
        Response::allow() :
        Response::denyAsNotFound();
    }

    public function update(User $user, Plant $plant): Response
    {
        return $user->id === $plant->user_id ? 
        Response::allow() :
        Response::denyAsNotFound();
    }

    public function water(User $user, Plant $plant): Response
    {
        return $user->id === $plant->user_id ? 
        Response::allow() :
        Response::denyAsNotFound();
    }

    public function addPhoto(User $user, Plant $plant): Response
    {
        return $user->id === $plant->user_id ? 
        Response::allow() :
        Response::denyAsNotFound();
    }

}
