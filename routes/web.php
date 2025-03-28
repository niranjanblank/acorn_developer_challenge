<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ExternalCatalogueController;

// route for the api to call external catalogue api
Route::get('/api/catalogue', [ExternalCatalogueController::class, 'index']);

// route to render react app catalogue
Route::get('/', function () {
    return Inertia::render('catalogue');
});




require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
