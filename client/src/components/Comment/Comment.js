import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../styles/custom';
import SingleComment from './Sections/SingleComment';
import { CommentBlock, CommentInsert, CommentList, CommentReply } from './style';
import TextareaAutosize from 'react-textarea-autosize';
import { IoCloseOutline } from 'react-icons/io5';
import ReplyComment from './Sections/ReplyComment';

export default function Comment({ postId, post, comments, refreshFc, detail, commInput }) {
  const user = useSelector(state => state.user);
  const [value, setValue] = useState('');
  const [reply, setReply] = useState({
    id: '',
    name: ''
  });
  const regdate = new Date(post.updatedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const onChange = e => {
    setValue(e.target.value);
  }

  const handleClick = (item) => {
    setReply({
      id: item.id,
      name: item.name
    });
    commInput.current.focus();
  }

  const undoComment = () => {
    setReply({
      id: '',
      name: ''
    });
    setValue('');
    commInput.current.focus();
  }

  const onSubmit = e => {
    e.preventDefault();

    const variables = {
      content: value,
      writer: user.userData._id,
      postId: postId
    }

    axios.post('/api/comments/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          refreshFc(response.data.result);
          setValue('');
          setReply('');
        } else {
          alert('코멘트를 저장하지 못했습니다.')
        }
      })
  }

  const onSubmitSingle = e => {
    e.preventDefault();

    const variables = {
      content: value,
      writer: user.userData._id,
      postId: postId,
      responseTo: reply.id,
      responseToName: reply.name
    }

    axios.post('/api/comments/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          refreshFc(response.data.result);
          setValue('');
          setReply({
            id: '',
            name: ''
          });
        } else {
          alert('코멘트를 저장하지 못했습니다.')
        }
      })
  }

  return (
    <CommentBlock className={detail ? 'commDetail' : ''}>
      <form onSubmit={reply.name ? onSubmitSingle : onSubmit}>
        <CommentInsert className={detail ? 'commDetail' : ''}>
          <span className="profile"><img src={user.userData.image} alt="" /></span>
          <div className="textarea">
            <TextareaAutosize 
              onChange={onChange} 
              ref={commInput} 
              value={value} 
              maxRows={4}
              minRows={1}
              placeholder="댓길 달기..."
            />
            <button disabled={value ? false: true}>게시</button>
          </div>
        </CommentInsert>
        {
          reply.name &&
          <CommentReply>
            {reply.name}님에게 답글 남기는 중
            <button onClick={undoComment}><IoCloseOutline /></button>
          </CommentReply>
        }
      </form>
      <CommentList className={reply.name ? 'active' : ''}>
        <Text className="title top">
          <span className="profile"><img src={post.writer.image} alt="" /></span>
          <div className="description">
            <b>{post.writer.name}</b>
            {post.description}
            <div>
              {regdate}
            </div>
          </div>
        </Text>
        <div className="wrap">
          {
            comments.map((comment, index) => (
              (!comment.responseTo &&
              <React.Fragment key={index}>
                <SingleComment comment={comment} handleClick={handleClick} />
                <ReplyComment comments={comments} handleClick={handleClick} parentId={comment._id} />
              </React.Fragment>
              )
            ))
          }
        </div>
      </CommentList>
    </CommentBlock>
  );
}