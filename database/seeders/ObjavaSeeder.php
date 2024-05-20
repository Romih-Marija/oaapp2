<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Objava;

class ObjavaSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        Objava::factory()->create([
            'ime' => 'Petra',
            'priimek' => 'Šinkar',
            'lokacija' => 'Ljubljana',
            'opis' => 'Potrebujem pomoč pri osebni negi in vsakodnevnih opravilih. Rada hodim na koncerte in rada imam živali. Imam psa spremljevalca, s katerim se veliko sprehajam po naravi.',
            'slika' => '\build\assets\petra.jpg',
            'user_id' => 1,
        ]);

        Objava::factory()->create([
            'ime' => 'Ime 2',
            'priimek' => 'Priimek 2',
            'lokacija' => 'Novo mesto',
            'opis' => 'Opis 2',
            'user_id' => 1,
        ]);

        // Dodajte še preostale objave
    }
}