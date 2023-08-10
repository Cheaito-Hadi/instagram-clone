<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    function following($username) {
        $logged_user = Auth::user();
        $followed_user = User::where('username', $username)->first();
        if($followed_user){
            $logged_user->follower()->attach($followed_user->id);
            return response()->json(['status' => 'Followed successfully']);
        }
        return response()->json(['status' => 'Could not follow']);
    }
}
