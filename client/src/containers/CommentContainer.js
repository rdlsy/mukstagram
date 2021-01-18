import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../components/Comment/Comment';

function CommentContainer({ post, detail, commInput }) {
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

  const refreshFc = (newComment) => {
    setComments(comments.concat(newComment));
  }

  return (
    <Comment refreshFc={refreshFc} post={post} postId={post._id} comments={comments} detail={detail} commInput={commInput} />
  );
}

export default CommentContainer;