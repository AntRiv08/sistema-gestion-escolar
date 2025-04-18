<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Admin',
            'email' => 'admin@admin.com',
            'password' => bcsqrt('12345678'),
        ])->assignRole('admin');
        User::factory(10)->create();
    }
}
