import React, { useEffect, useState } from 'react';
import { MoreBtn, Reply } from '../style';
import SingleComment from './SingleComment';

function ReplyComment({ comments, parentId, handleClick }) {
  const [commentNumber, setCommentNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  }

  useEffect(() => {
    let commentNumber = 0;
    comments.forEach(comment => {
      if (comment.responseTo === parentId) {
        commentNumber++
      }
    });
    setCommentNumber(commentNumber);

  }, [comments, parentId]);

  let ReplyBlock = (parentId) =>
    comments.map((comment, index) => (
      <React.Fragment key={index}>
        {comment.responseTo === parentId &&
          <Reply className="reply" key={index}>
            <SingleComment comment={comment} handleClick={handleClick} />
            <ReplyComment comments={comments} parentId={comment._id} handleClick={handleClick} />
          </Reply>
        }
      </React.Fragment>
    ));

  return (
    <>
      {
        commentNumber > 0 &&
        <MoreBtn onClick={onToggle} className="bar">
          <button>
            <div></div>
            {
              open ?
              <span>답글 숨기기</span> :
              <span>답글 보기({commentNumber}개)</span>
            }
          </button>
        </MoreBtn>
      }
      {open && ReplyBlock(parentId)}
    </>
  );
}

export default ReplyComment;