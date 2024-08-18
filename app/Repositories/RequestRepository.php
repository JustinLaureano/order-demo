<?php

namespace App\Repositories;

use App\Models\Request;
use Domain\Requests\DataTransferObjects\RequestData;

class RequestRepository
{
    public function create(RequestData $data) : Request
    {
        return Request::create($data->toArray());
    }
}