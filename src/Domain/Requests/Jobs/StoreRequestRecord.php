<?php

namespace Domain\Requests\Jobs;

use App\Events\RequestCreated;
use App\Models\Request;
use Domain\Requests\DataTransferObjects\RequestData;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class StoreRequestRecord implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public RequestData $requestData)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $request = Request::create($this->requestData->toArray());

        RequestCreated::dispatch($request);
    }
}
