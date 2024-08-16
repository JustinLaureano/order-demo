<?php

use App\Events\SkidMoved;
use App\Events\SkidMoveFinished;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
        return $request->user();
    })
    ->name('api.user')
    ->middleware('auth:sanctum');



Route::post('/test', function (Request $request) {
        $test = auth()->user()->test()->create([
            'text' => 'some words'
        ]);

        SkidMoved::dispatch($test);

        SkidMoveFinished::dispatch($test);

        return $test->toArray();
    })
    ->name('api.test')
    ->middleware('auth:sanctum');