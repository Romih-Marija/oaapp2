<?php

namespace App\Http\Controllers;

use App\Http\Resources\ObjavaResource;
use App\Http\Controllers\Controller;
use App\Models\Objava;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ObjavaController extends Controller
{
    public function index()
    {     
        $query = Objava::query();
        $objavas = $query->orderBy('created_at', 'desc')->paginate(10);
        return Inertia("Objava/Index", [
            "objavas" => ObjavaResource::collection($objavas),
        ]);
        
    }

    // Store a new task
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'ime' => 'required|max:255',
                'priimek' => 'required|max:255',
                'opis' => 'nullable',
                'lokacija' => 'max:255',
                'telefonska' => 'nullable|max:255',
                'eposta' => 'nullable|email|max:255',
                'datum_rojstva' => 'nullable|date',
                'delovni_cas' => 'required',
                'delovni_cas2' => 'required',
                'slika' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:4048',
                'user_id' => 'exists:users,id'
            ]);
            

            // Create a new task with the validated data
            Objava::create($validatedData);

            return to_route('objava.index');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return to_route(
                'objava.index',
                [
                    'message' => 'Objava not created'
                ]
            );
        }
    }
    public function create() { 
        
         return Inertia::render('Objava/Create');
    }

    // Update the specified task
    public function update(Request $request, Objava $objava)
    {
        $validatedData = $request->validate([
            'ime' => 'required|max:255',
            'priimek' => 'required|max:255',
            'opis' => 'nullable',
        ]);

        $objava->update($validatedData);

        return to_route('objave.index');
    }

    // Remove the specified task
    public function destroy(Objava $objava)
    {
        $objava->delete();
        return to_route('objave.index', [
            'message' => 'Objava deleted successfully'
        ]);
    }
}