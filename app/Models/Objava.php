<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objava extends Model
{
    use HasFactory;
    protected $fillable = ['ime', 'priimek', 'lokacija', 'opis', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
