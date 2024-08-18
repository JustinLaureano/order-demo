<?php

namespace Domain\Requests\Services;

use App\Models\Request;
use Domain\Requests\DataTransferObjects\RequestData;

class RequestsService
{
    public function create(RequestData $data) : Request
    {
        return Request::create($data->toArray());
    }
}