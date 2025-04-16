<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $free_account = Role::create(['name' => 'free_account']);
        $premiun_account = Role::create(['name' => 'premiun_account']);
        $admin = Role::create(['name' => 'admin']);
    }
}
