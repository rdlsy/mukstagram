import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../styles/custom';


function PostTitle({ post, regdate }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const variable = { 
      postId: post._id 
    };

    axios.post('/api/comments/getComments', variable)
      .then(response => {
        if (response.data.success) {
          setComments(response.data.comments);
        } else {
          alert('코멘트 정보를 가져오기 실패했습니다.')
        }
      })
  }, [post._id]);

  return (
    <React.Fragment>
      <Text className="title">
        <span className="profile"><img src={post.writer.image} alt="" /></span>
        <div className="description">
          <b>{post.writer.name}</b>
          {post.description}
          {comments.length > 0 && <div className="count"><Link to={`/post/${post._id}/comments`}>댓글 {comments.length}개 모두 보기</Link></div>}
          <div>
            {regdate}
          </div>
        </div>
      </Text>
    </React.Fragment>
  );
}

export default PostTitle;