<?php

namespace App\Http\Controllers\Requests;

use App\Http\Controllers\Controller;
use Domain\Requests\Actions\CreateRequestAction;
use Domain\Requests\DataTransferObjects\RequestData;

class CreateRequestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(RequestData $requestData, CreateRequestAction $action)
    {
        $action->handle($requestData);

        return redirect(route('home'));
    }
}
