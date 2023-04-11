<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Plant;

class Watering extends Model
{
    use HasFactory;

    protected $fillable = [
        'plant_id'
    ];

    protected $table = 'waterings';

    public function Plant()
    {
        return $this->hasOne(Plant::class);
    }
}
