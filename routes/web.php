<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ExternalCatalogueController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/api/catalogue', [ExternalCatalogueController::class, 'index']);

Route::get('/catalogue', function () {
    return Inertia::render('catalogue');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
