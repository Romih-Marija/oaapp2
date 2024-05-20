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
        $objavas = $query->paginate(10);
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
                'user_id' => 'required|exists:users,id'
            ]);

            // Create a new task with the validated data
            Objava::create($validatedData);

            return to_route('objave.index');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return to_route(
                'objave.index',
                [
                    'message' => 'Objava not created'
                ]
            );
        }
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