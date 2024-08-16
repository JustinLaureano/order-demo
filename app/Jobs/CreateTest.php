<?php

namespace App\Jobs;

use App\Events\SkidMoved;
use App\Models\Test;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateTest implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $test = User::findOrFail(1)->test()->create([
            'text' => fake()->text()
        ]);

        SkidMoved::dispatch($test);
    }
}
