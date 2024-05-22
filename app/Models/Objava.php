<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objava extends Model
{
    use HasFactory;
    protected $fillable = [ 
    'ime',
    'priimek',
    'opis',
    'lokacija',
    'telefonska',
    'eposta',
    'datum_rojstva',
    'delovni_cas',
    'delovni_cas2',
    'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
