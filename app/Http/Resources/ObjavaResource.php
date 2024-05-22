<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ObjavaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $starost = now()->diff($this->datum_rojstva)->y;
        return [   
            'id' => $this->id,
            'ime' => $this->ime,
            'priimek' => $this->priimek,
            'lokacija' => $this->lokacija,
            'opis' => $this->opis,
            'telefonska' => $this -> telefonska,
            'eposta' => $this -> eposta,
            'delovni_cas' => $this -> delovni_cas,
            'delovni_cas2' => $this -> delovni_cas2,
            'datum_rojstva' =>$starost,
            'slika' => $this->slika,
            'user_id' => $this->user_id,
   ];
    }
}
