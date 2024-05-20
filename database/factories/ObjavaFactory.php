<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Objava>
 */
class ObjavaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ime' => fake()->sentence(),
            'priimek' => fake()->sentence(),
            'opis' => fake()->realText(),
            'user_id' => 1,
        ];
    }
}
