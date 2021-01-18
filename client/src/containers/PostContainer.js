import React, { useCallback, useEffect, useState } from 'react';
import Post from '../components/Post/Post';
import { Box, Container, HeaderWrap, Title } from '../styles/custom';
import { IoIosArrowBack } from "react-icons/io";
import { Route, withRouter } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import { useDispatch } from 'react-redux';
import { getPostDetail } from '../_action/post_action';
import Loading from '../components/Loading/Loading';
import None from '../components/None';

function PostContainer(props) {
  const postId = props.match.params.id;
  const url = props.match.url;
  const pathName = props.location.pathname;
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  
  const back = useCallback((e) => {
    e.preventDefault();
    props.history.goBack();
  },[props.history]);

  useEffect(() => {
    setLoading(true)
    const variable = { postId };
    dispatch(getPostDetail(variable))
      .then(response => {
        if (response.payload.success) {
          setLoading(false);
          setPost(response.payload.postDetail);
        } else {
          alert('Failed to get files');
        }
      })
  }, [postId, dispatch]);

  return (
    <Container detail className={url === pathName ? '' : 'comm'}>
      {loading && <Loading />}
      <HeaderWrap popup>
        <Box header>
          <button onClick={back} className="back"><IoIosArrowBack /></button>
          <Title>{url === pathName ? '새 개시물' : '댓글'}</Title>
          <span></span>
        </Box>
      </HeaderWrap>
      <Route
        path={url}
        exact
        render={() => 
          post.writer ? <Post post={post} detail /> : <None />
        }
      />
      <Route 
        path={`${url}/comments`} 
        render={() =>
          post.writer ? <CommentContainer postId={postId} post={post} /> : <None />
        }
      />
    </Container>
  )
}

export default withRouter(PostContainer);