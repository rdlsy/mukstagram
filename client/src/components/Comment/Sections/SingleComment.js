import React, { useState, useEffect, useMemo } from 'react';
import { Text } from '../../../styles/custom';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import axios from 'axios';
import { useSelector } from 'react-redux';

function SingleComment({ comment, handleClick }) {
  const [likes, setLikes] = useState(0);
  const [likeAction, setLikeAction] = useState(false);
  const user = useSelector(state => state.user);
  const regdate = new Date(comment.updatedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const reply = {
    id: comment._id,
    name: comment.writer.name
  }
  const variable = useMemo(() => ({
    commentId: comment._id,
    userId: user.userData._id
  }), [comment._id, user.userData._id]);

  const onLike = () => {
    if (!likeAction) {
      axios.post('/api/like/upLike', variable)
        .then(response => {
          if (response.data.success) {
            setLikes(likes + 1);
            setLikeAction(true);
          } else {
            alert('Failed to increase the like')
          }
        })
    } else {
      axios.post('/api/like/unLike', variable)
        .then(response => {
          if (response.data.success) {
            setLikes(likes - 1);
            setLikeAction(false);
          } else {
            alert('Failed to decrease the like')
          }
        })
    }
  }

  useEffect(() => {
    axios.post('/api/like/getLikes', variable)
      .then(response => {
        if (response.data.success) {
          setLikes(response.data.likes.length);
          response.data.likes.forEach(like => {
            if (like.userId === user.userData._id) {
              setLikeAction('liked');
            }
          })
        } else {
          alert('좋아요 정보를 가져오기 실패했습니다.')
        }
      })
  }, [user.userData._id, variable]);

  return (
    <Text className="title">
      <span className="profile"><img src={comment.writer.image} alt="" /></span>
      <div className="description">
        <b>{comment.writer.name}</b>
        {comment.responseToName && <span className="name">@{comment.responseToName} </span>}
        {comment.content}
        <div>
          {regdate}
          {likes > 0 && <span>좋아요 {likes}개</span>}
          <span onClick={() => handleClick(reply)}>답글 달기</span>
        </div>
      </div>
      <div className={!likeAction ? 'like' : 'like active'}>
        <button onClick={onLike}>
          {
            !likeAction ?
            <IoIosHeartEmpty /> :
            <IoIosHeart />
          }
        </button>
      </div>
    </Text>
  );
}

export default SingleComment;