<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('objavas', function (Blueprint $table) {
            $table->id();
            $table->string('ime');
            $table->string('priimek');
            $table->string('lokacija');
            $table->text('opis')->nullable();
            $table->string('slika')->nullable();
            $table->string('telefonska')->nullable();
            $table->string('eposta')->nullable();
            $table->string('delovni_cas');
            $table->string('delovni_cas2');
            $table->date('datum_rojstva')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objavas');
    }
};