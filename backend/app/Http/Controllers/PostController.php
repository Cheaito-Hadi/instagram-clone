<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $post = new Post;
        $post->user_id = Auth::id();
        $post->caption = $request->caption ? $request->caption : $post->caption;
        $file_name = time() . "post_image" . "." . $request->image_url->extension();
        $request->image_url->move(storage_path('images'), $file_name);
        $post->image_url = storage_path("images") . "\\" . $file_name;
        $post->save();

        return response()->json([
            "status" => "success",
            "data" => $post
        ]);
    }

    public function getPosts(){
        $user = Auth::user();
        $posts = Post::whereIn('user_id', $user->follower->pluck('id'))->orderBy('created_at', 'desc')->get();
        foreach ($posts as $post){
            $image64 = base64_encode(file_get_contents($post->image_url));
            $post -> image_url = $image64;
            $post -> likes;
            $post -> likes_count = count($post -> likes);
            $post->username = User::where('id', $post->user_id)->first()->username;
            unset($post->user_id);
        }
        return response()->json([
            'status' => 'success',
            'posts' => $posts,
        ]);
    }
}
