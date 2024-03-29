<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiRequest;

class plantUpdateRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'max:255',
            'description' => '',
            'watering_per_week' => '',
        ];
    }
}
