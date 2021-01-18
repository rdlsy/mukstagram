import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from '../../../styles/custom';
import { Btns, DetailTop } from '../style';

function PostMenu({ regdate, width, post, detail, onFocus }) {
  const user = useSelector(state => state.user);
  const [likes, setLikes] = useState(0);
  const [likeAction, setLikeAction] = useState(false);
  const variable = useMemo(() => ({
    postId: post._id,
    userId: user.userData._id
  }), [post._id, user.userData._id]);

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
              setLikeAction(true);
            }
          })
        } else {
          alert('좋아요 정보를 가져오기 실패했습니다.')
        }
      })

  }, [user.userData._id, variable]);
  
  return (
    <DetailTop>
      <Btns className="btns">
        <button onClick={onLike} className={!likeAction ? 'like' : 'like active'}>
          {
            !likeAction ?
            <IoIosHeartEmpty /> :
            <IoIosHeart />
          }
        </button>
        {
          width <= 600 ?
          <Link to={`/post/${post._id}/comments`} className="bubble"><IoChatbubbleOutline /></Link> :
          !detail ?
          <Link to={`/post/${post._id}`} className="bubble"><IoChatbubbleOutline /></Link> :
          <button className="bubble" onClick={onFocus}><IoChatbubbleOutline /></button>
        }
      </Btns>
      {likes > 0 && <Text><b>{likes}명</b>이 좋아합니다.</Text>}
      <Text date className="date">{regdate}</Text>
    </DetailTop>
  );
}

export default PostMenu;