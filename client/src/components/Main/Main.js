import React from 'react';
import { PostList } from './style';
import { Link } from 'react-router-dom';

export default function Main({ posts }) {

  const Post = posts.map((post, index) => {
    const minutes = Math.floor(post.duration / 60);
    const seconds = Math.floor((post.duration - minutes * 60));

    return (
      <div key={index} className="post">
        <Link to={`/post/${post._id}`}>
          {
            post.thumbnail ?
            <>
              <img src={`http://localhost:5000/${post.thumbnail}`} alt="thumnail" />
              <div className="duration">
                <span>{minutes} : {seconds}</span>
              </div>
              <div className="play">
                <svg aria-label="동영상" className="_8-yf5 edmGD" fill="#ffffff" height="18" viewBox="0 0 48 48" width="18">
                  <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
                </svg>
              </div>
            </> :
            <img src={`http://localhost:5000/${post.filePath}`} alt="" width="320" height="320" />
          }
        </Link>
      </div>
    )
  });

  return (
    <PostList>
      {Post}
    </PostList>
  );
}