import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../../Components/Post/index';

const Landing = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <Post key={post.id} 
        post_id={post}
        caption={post.caption}
        image_url={post.image_url}
        uploader={post.username}
        likes={post.likes_count}
        />
      ))}
    </div>
  );
};

export default Landing;
