<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LikeController;
use App\Models\Follow;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/create_post', [PostController::class, "createPost"]);
Route::get('/get_posts', [PostController::class, "getPosts"]);
Route::post('/follow/{username}', [UserController::class, 'followUser']);
Route::post('/unfollow/{username}', [UserController::class, 'unfollowUser']);
Route::post('/search/{username}', [UserController::class, 'searchUser']);
Route::post('/like/{post_id}', [LikeController::class, 'likePost']);
Route::post('/unlike/{post_id}', [LikeController::class, 'unlikePost']);

