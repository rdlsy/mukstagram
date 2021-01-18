import React from 'react';
import { PostList } from './style';
import Post from '../Post/Post';

export default function Feed({ posts }) {
  return (
    <PostList>
      {
        posts.map((post, index) => (
          <Post key={index} post={post} />
          ))
      }
    </PostList>
  );
}