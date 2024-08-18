<?php

namespace Domain\Requests\Actions;

use Domain\Requests\DataTransferObjects\RequestData;
use Domain\Requests\Jobs\StoreRequestRecord;
use Domain\Requests\Jobs\UpsertRecentRequestsCache;

class CreateRequestAction
{
    public function handle(RequestData $requestData)
    {
        StoreRequestRecord::dispatch($requestData);

        UpsertRecentRequestsCache::dispatch();
    }
}