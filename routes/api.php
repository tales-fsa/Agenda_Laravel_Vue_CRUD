<?php

use App\Http\Controllers\ContatoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/index', [ContatoController::class, 'index']);
Route::post('/store', [ContatoController::class, 'store']);
Route::get('/edit/{id}', [ContatoController::class, 'edit']);
Route::post('/update/{id}', [ContatoController::class, 'update']);
Route::get('/delete/{id}', [ContatoController::class, 'delete']);

