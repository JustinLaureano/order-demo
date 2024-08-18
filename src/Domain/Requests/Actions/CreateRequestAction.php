<?php

namespace Domain\Requests\Actions;

use Domain\Requests\DataTransferObjects\RequestData;
use Domain\Requests\Jobs\StoreRequestRecord;
use Illuminate\Support\Facades\Log;

class CreateRequestAction
{
    public function handle(RequestData $requestData)
    {
        StoreRequestRecord::dispatch($requestData);
    }
}