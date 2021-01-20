import React, { useEffect, useRef, useState } from 'react';
import { PostBlock, Img} from './style';
import CommentContainer from '../../containers/CommentContainer';
import PostTitle from './Section/PostTitle';
import PostMenu from './Section/PostMenu';
import User from '../../styles/components/User';

export default function Post({ post, detail }) {
  const regdate = new Date(post.updatedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [width, setWidth] = useState(window.innerWidth);

  const commInput = useRef();
  const onFocus = () => {
    commInput.current.focus();
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  }, []);
  
  return (
    <PostBlock className="post">
      <User
        image={post.writer.image}
        userName={post.writer.name}
      />
      <Img className="img">
        {
          post.thumbnail ?
          <video style={{ width: '100%' }} src={`https://mukstagram.herokuapp.com/${post.filePath}`} controls /> :
          <img src={`https://mukstagram.herokuapp.com/${post.filePath}`} alt="" />
        }
      </Img>
      <div className="textBox">
        <PostMenu regdate={regdate} width={width} post={post} detail={detail} onFocus={onFocus} />
        {detail && width >= 600 && <CommentContainer post={post} detail={detail} commInput={commInput} />}
        {detail && width <= 600 && <PostTitle post={post} regdate={regdate} />}
        {!detail && <PostTitle post={post} regdate={regdate} />}
      </div>
    </PostBlock>
  );
}