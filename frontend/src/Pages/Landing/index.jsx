import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../../Components/Post/index';

const Landing = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_posts');
      setPosts(response.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    // <div className="container">
    //   {posts.map((post) => (
    //     <Post key={post.id} 
    //     post_id={post}
    //     caption={post.caption}
    //     image_url={post.image_url}
    //     uploader={post.username}
    //     likes={post.likes}
    //     />
    //   ))}
    // </div>
    <div className="card-frame">
      <div className="profile-container">
        <div className="picture">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M32 20C32 22.1217 31.1571 24.1566 29.6569 25.6569C28.1566 27.1571 26.1217 28 24 28C21.8783 28 19.8434 27.1571 18.3431 25.6569C16.8429 24.1566 16 22.1217 16 20C16 17.8783 16.8429 15.8434 18.3431 14.3431C19.8434 12.8429 21.8783 12 24 12C26.1217 12 28.1566 12.8429 29.6569 14.3431C31.1571 15.8434 32 17.8783 32 20Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44C23.9087 44.0006 23.8173 44.0006 23.726 44C23.545 44 23.364 43.994 23.184 43.984ZM11.166 36.62C11.0165 36.1906 10.9656 35.733 11.0171 35.2812C11.0686 34.8294 11.2212 34.395 11.4636 34.0103C11.706 33.6255 12.0319 33.3003 12.4171 33.0588C12.8024 32.8172 13.2371 32.6655 13.689 32.615C21.485 31.752 26.563 31.83 34.321 32.633C34.7735 32.6801 35.2093 32.8299 35.5952 33.0709C35.9811 33.3119 36.3068 33.6378 36.5477 34.0237C36.7886 34.4096 36.9383 34.8455 36.9853 35.298C37.0323 35.7505 36.9754 36.2078 36.819 36.635C40.1439 33.2709 42.006 28.7299 42 24C42 14.059 33.941 6 24 6C14.059 6 6 14.059 6 24C6 28.916 7.971 33.372 11.166 36.62Z"
              fill="black"
            />
          </svg>
        </div>
        {/* username */}
        <div className="name">Hadi Cheaito</div> 
      </div>
      <div>
        {/* image */}
        <img className="post" src="/profileTest.jpg" alt="post" />
      </div>
      <div className="likes-container">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 32 35"
            fill="none"
          >
            <path
              d="M10 5.83325C5.95002 5.83325 2.66669 9.4244 2.66669 13.8541C2.66669 21.8749 11.3334 29.1666 16 30.8626C20.6667 29.1666 29.3334 21.8749 29.3334 13.8541C29.3334 9.4244 26.05 5.83325 22 5.83325C19.52 5.83325 17.3267 7.18002 16 9.24138C15.3238 8.18788 14.4255 7.32811 13.381 6.73486C12.3366 6.14161 11.1769 5.83234 10 5.83325Z"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* likes */}
        <div className="nb-likes">100 Likes</div>
      </div>
      {/* username */}
      <div className="caption-name">
        Hadi Cheaito
      </div>
      {/* caption */}
      <p className="caption">
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Landing;
