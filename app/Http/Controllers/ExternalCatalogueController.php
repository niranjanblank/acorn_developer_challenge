<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExternalCatalogue\CatalogueFactory;
use Illuminate\Support\Facades\Http;

class ExternalCatalogueController extends Controller
{
    //
    public function index(Request $request){

        try{
            // pull query parameters
            $query = $request->only([
                'perPage', 'page', 'username', 'nameFilter', 'contentId',
                'contentType', 'programId', 'categoryId', 'showHidden', 'showDeactivated',
            ]);

            // load credentials from env
            $apiKey = env('ACORN_API_KEY');
            $tenancyId = env('ACORN_TENANCY_ID');
            $baseUrl = rtrim(env('ACORN_CATALOGUE_BASE_URL'), '/');

            //set the pagination details to default if not provided
            $query['page'] ??= 1;
            $query['perPage'] ??= 16;


            // make request to external catalogue
            $catalogueResponse = Http::withHeaders([
                'Authorization' => "Bearer {$apiKey}",
                'User-Agent' => 'AcornAPIClient/1.0',
                'Accept' => 'application/json',
            ])->withoutVerifying()->get("{$baseUrl}/local/acorn_coursemanagement/index.php/api/1.1/external_catalogue/{$tenancyId}", $query);

            //
            if ($catalogueResponse->failed()) {
                Log::error('Acorn API request failed', [
                    'status' => $catalogueResponse->status(),
                    'body'   => $catalogueResponse->body(),
                ]);

                return response()->json([
                    'success' => false,
                    'data'    => null,
                    'message' => 'Failed to fetch external catalogue.',
                ], $catalogueResponse->status());
            }

            $items = $catalogueResponse->json('data.items') ?? [];

            $catalogue = collect($items)
                ->map(fn($item) => CatalogueFactory::make($item)->toArray());

                return response()->json([
                    'success' => true,
                    'data'    => $catalogue,
                    'message' => "Data fetched successfully",
                ]);
        }
        catch(\Throwable $e){
            Log::error('Unexpected error in ExternalCatalogueController', [
                'message' => $e->getMessage(),
                'trace'   => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'data'    => null,
                'message' => 'Something went wrong while fetching catalogue data.',
            ], 500);
        }


    }
}
