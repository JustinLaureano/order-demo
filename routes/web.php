<?php

use App\Http\Controllers\HomeController;
use App\Models\Test;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'tests' => Test::latest()->paginate()
        ]);

    })
    ->middleware(['auth', 'verified'])
    ->name('dashboard');




Route::get('/teammates', function () {

        return Inertia::render('Test/Teammates');

    })
    ->middleware(['auth:teammate'])
    ->name('teammates');


require __DIR__.'/auth.php';

require __DIR__.'/test.php';
require __DIR__.'/orders.php';


/**
 * 
 * All dev and test above, all real below
 * 
 * 
 */



 Route::get('/', HomeController::class)->name('home');
