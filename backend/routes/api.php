<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Models\Follow;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/create_post', [PostController::class, "createPost"]);
Route::get('/get_posts', [PostController::class, "getPosts"]);
Route::get('/get_posts', [PostController::class, "getPosts"]);
Route::post('/follow/{username}', [UserController::class, 'following']);

