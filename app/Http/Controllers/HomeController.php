<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $currentRequests = Cache::get('current_requests', function () {
            return Test::latest()->paginate();
        });

        return Inertia::render('Home', [
            'currentRequests' => $currentRequests
        ]);
    }
}
