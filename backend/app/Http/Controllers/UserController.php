<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    function followUser($username)
    {
        $loggedUser = Auth::user();
        $followedUser = User::where('username', $username)->first();
        if ($followedUser) {
            $loggedUser->follower()->attach($followedUser->id);
            return response()->json(['status' => 'Followed successfully']);
        }
        return response()->json(['status' => 'User not found or could not follow']);
    }


    function unfollowUser($username)
    {
        $loggedUser = Auth::user();
        $unfollowedUser = User::where('username', $username)->first();
        if ($unfollowedUser) {
            $loggedUser->follower()->detach($unfollowedUser->id);
            return response()->json(['status' => 'Unfollowed successfully']);
        }
        return response()->json(['status' => 'User not found or could not unfollow']);
    }

    function searchUser($username)
    {
        $loggedUser = Auth::user();
        $users = User::where('username', 'LIKE', "%{$username}%")
            ->where('id', '!=', $loggedUser->id)
            ->get();
        $following = $loggedUser->follower()->get();
        $users->each(function ($user) use ($following) {
            $user->is_following = $following->contains($user);
        });

        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
}
