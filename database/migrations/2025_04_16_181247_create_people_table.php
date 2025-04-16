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
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('identification_number', 20);
            $table->string('address', 255);
            $table->string('phone_number', 20);
            $table->string('status', 11)->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('no action');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
