<?php

namespace App\Listeners;

use App\Events\SkidMoved;
use App\Models\Test;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Cache;

class CacheCurrentRequestsList implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(SkidMoved $event): void
    {
        $tests = Test::latest()->paginate();

        Cache::put('current_requests', $tests, now()->addMinutes(5));
    }
}
