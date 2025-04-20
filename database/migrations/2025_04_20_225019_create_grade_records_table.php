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
        Schema::create('grade_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('teacher_id');
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('subject_id');
            $table->decimal('score_1', 5, 2)->nullable();
            $table->decimal('score_2', 5, 2)->nullable();
            $table->decimal('score_3', 5, 2)->nullable();
            $table->string('status', 11)->nullable();
            $table->timestamps();
            $table->foreign('student_id')->references('id')->on('students')->onUpdate('cascade');
            $table->foreign('teacher_id')->references('id')->on('teachers')->onUpdate('cascade');
            $table->foreign('subject_id')->references('id')->on('subjects')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grade_records');
    }
};
