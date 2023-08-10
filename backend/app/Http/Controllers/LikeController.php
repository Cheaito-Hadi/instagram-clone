<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;


class LikeController extends Controller
{
    public function likePost($post_id)
    {
        $user_id = Auth::id();
        $post = Post::find($post_id);
        if (!$post) {
            return response()->json(['status' => 'Post was not found']);
        }
        $alreadyLiked = Like::where('user_id', $user_id)->where('post_id', $post_id)->first();
        if ($alreadyLiked) {
            return response()->json(['status' => 'You liked this post before']);
        }
        $like = new Like;
        $like->user_id = $user_id;
        $like->post_id = $post_id;
        $like->save();
        return response()->json(['status' => 'Liked the post successfully']);
    }

    public function unlikePost($post_id)
    {
        $user_id = Auth::id();
        $post = Post::find($post_id);
        if (!$post) {
            return response()->json(['status' => 'Post was not found']);
        }
        $existingLike = Like::where('user_id', $user_id)->where('post_id', $post_id)->first();
        $existingLike->delete();
        return response()->json(['status' => 'Unliked the post successfully']);
    }
}
