<?php

use App\Events\SkidMoved;
use App\Models\Test;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/test', function () {

    $test = Test::create([
        'user_id' => 1,
        'text' => fake()->text()
    ]);

    SkidMoved::dispatch($test);

    return Inertia::render('Test/Index');
});