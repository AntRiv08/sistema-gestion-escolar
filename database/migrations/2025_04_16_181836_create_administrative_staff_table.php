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
        Schema::create('administrative_staff', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('person_id');
            $table->timestamps();
            $table->string('status', 11)->nullable();
            $table->foreign('person_id')->references('id')->on('people')->onUpdate('cascade')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administrative_staff');
    }
};
