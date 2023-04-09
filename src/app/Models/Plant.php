<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'photo',
        'description',
        'watering_per_week'
    ];

    protected $table = 'plants';
}
