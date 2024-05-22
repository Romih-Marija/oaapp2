<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Objava;
use Carbon\Carbon;

class ObjavaSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        $datum_rojstva = Carbon::createFromFormat('j.n.Y', '2.3.1995')->format('Y-m-d');
        Objava::factory()->create([
            'ime' => 'Petra',
            'priimek' => 'Šinkar',
            'lokacija' => 'Ljubljana',
            
            'opis' => 'Potrebujem pomoč pri osebni negi in vsakodnevnih opravilih. Rada hodim na koncerte in rada imam živali. Imam psa spremljevalca, s katerim se veliko sprehajam po naravi.',
            'slika' => '\build\assets\petra.jpg',
            'telefonska'=> '070 553 478',
            'eposta' => 'petra.sinkar@gmail.com',
            'delovni_cas' => 'polni',
            'delovni_cas2' => 'izmenično',
            'datum_rojstva' => $datum_rojstva,
            'user_id' => 1,
        ]);
        $datum_rojstva2 = Carbon::createFromFormat('j.n.Y', '12.5.1993')->format('Y-m-d');
        Objava::factory()->create([
            'ime' => 'Jure',
            'priimek' => 'Oblak',
            'lokacija' => 'Koper',
            
            'opis' => 'Potrebujem asistenta z izpitom za avto. Hodim v službo za polovični delovni čas. Potrebujem asistenta, ki me lahko vozi do službe, mi nudi spremstvo in pomoč pri jutranji osebni negi.',
            'slika' => '\build\assets\jure.png',
            'telefonska'=> '041 253 328',
            'eposta' => 'jure.oblak@gmail.com',
            'delovni_cas' => 'polovični',
            'delovni_cas2' => 'dopoldan',
            'datum_rojstva' => $datum_rojstva2,
            'user_id' => 1,
        ]);
        $datum_rojstva2 = Carbon::createFromFormat('j.n.Y', '12.7.1989')->format('Y-m-d');
        Objava::factory()->create([
            'ime' => 'Ana',
            'priimek' => 'Novak',
            'lokacija' => 'Ljubljana',
            
            'opis' => 'Potrebujem pomoč pri vsakodnevnih opravilih. Dvakrat na teden plavam v bazenu in rada čas preživljam v naravi. Potrebujem asistenco tudi med vikendi.',
            'slika' => '\build\assets\ana.jpg',
            'telefonska'=> '041 322 728',
            'eposta' => 'ana.novak@gmail.com',
            'delovni_cas' => 'polni',
            'delovni_cas2' => 'izmenično',
            'datum_rojstva' => $datum_rojstva2,
            'user_id' => 1,
        ]);
        $datum_rojstva4 = Carbon::createFromFormat('j.n.Y', '5.10.1990')->format('Y-m-d');
        Objava::factory()->create([
            'ime' => 'Marko',
            'priimek' => 'Kranjc',
            'lokacija' => 'Maribor',
            'opis' => 'Iščem pomoč pri gospodinjskih opravilih in nakupovanju. Sem aktiven športnik in potrebujem asistenta za prevoz na treninge.',
            'slika' => '\build\assets\marko.png',
            'telefonska'=> '031 123 456',
            'eposta' => 'marko.kranjc@gmail.com',
            'delovni_cas' => 'polni',
            'delovni_cas2' => 'popoldan',
            'datum_rojstva' => $datum_rojstva4,
            'user_id' => 1,
        ]);
        $datum_rojstva5 = Carbon::createFromFormat('j.n.Y', '23.11.1985')->format('Y-m-d');
        Objava::factory()->create([
            'ime' => 'Nataša',
            'priimek' => 'Horvat',
            'lokacija' => 'Celje',
            'opis' => 'Potrebujem asistenta za pomoč pri osebni negi in spremstvo pri zdravniških pregledih. Imam kronično zdravstveno stanje, ki zahteva redne obiske pri zdravniku in fizioterapijo. 
                       Poleg tega potrebujem pomoč pri gospodinjskih opravilih, kot so kuhanje, čiščenje in nakupovanje. Sem zelo družabna oseba in iščem nekoga, ki je prijazen in zanesljiv.
                       Imam tudi mačko, zato bi bilo dobro, če bi bil/a asistent/ka ljubitelj/ica živali.',
            'slika' => '\build\assets\natasa.jpg',
            'telefonska'=> '040 789 654',
            'eposta' => 'natasa.horvat@gmail.com',
            'delovni_cas' => 'polovični',
            'delovni_cas2' => 'dopoldan',
            'datum_rojstva' => $datum_rojstva5,
            'user_id' => 1,
        ]);
         $datum_rojstva6 = Carbon::createFromFormat('j.n.Y', '15.8.1968')->format('Y-m-d');
    Objava::factory()->create([
        'ime' => 'Luka',
        'priimek' => 'Petrov',
        'lokacija' => 'Trbovlje',
        'opis' => 'Iščem asistenta za pomoč pri vsakodnevnih aktivnostih, vključno s transportom do službe in nazaj, pomočjo pri nakupovanju in lahkih gospodinjskih opravilih. 
                   Sem precej samostojen, vendar potrebujem pomoč zaradi omejene mobilnosti. Uživam v branju knjig, gledanju filmov in obiskovanju lokalnih kulturnih prireditev. 
                  ',
        'slika' => '\build\assets\luka.png',
        'telefonska'=> '041 456 789',
        'eposta' => 'luka.petrov@gmail.com',
        'delovni_cas' => 'polovični',
        'delovni_cas2' => 'popoldan',
        'datum_rojstva' => $datum_rojstva6,
        'user_id' => 1,
    ]);
    }
        // Dodajte še preostale objave
    }
