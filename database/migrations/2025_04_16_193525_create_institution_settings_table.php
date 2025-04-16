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
        Schema::create('institution_settings', function (Blueprint $table) {
            $table->id();
            $table->string('institution_name');
            $table->string('logo')->nullable();
            $table->string('logo_public_id')->nullable();
            $table->string('address');
            $table->string('phone', 20)->nullable();
            $table->string('mobile', 20)->nullable();
            $table->string('email', 60)->nullable();
            $table->string('status', 11)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institution_settings');
    }
};
