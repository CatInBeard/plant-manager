<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Watering;

class Plant extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'photo',
        'description',
        'watering_per_week'
    ];

    protected $attributes = array(
        'photo' => '',
        'watering_per_week' => 0
    );

    protected $table = 'plants';

    public function Waterings(){
        return $this->hasMany(Watering::class);
    }
}
