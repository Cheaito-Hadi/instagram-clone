<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function postedBy(){
        return $this -> belongsTo(User::class);
    }
    public function countLikes(){
        return $this -> hasMany(Like::class);
    }
}
