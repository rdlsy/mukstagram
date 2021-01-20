import React, { useState, useEffect } from 'react';
import { Container } from '../styles/custom';
import { ListWrap } from '../components/Grid/style';
import Feed from '../components/Feed/Feed';
import { getPosts } from '../_action/post_action';
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading/Loading';
import None from '../components/None';

function MainConatiner() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)
    dispatch(getPosts())
      .then(response => {
        if (response.payload.success) {
          let data = response.payload.posts;
          setLoading(false);
          setPosts(data.reverse());
        } else {
          alert('Failed to get files');
        }
      })
  }, [dispatch]);

  return (
    <Container>
      {loading && <Loading />}
      <ListWrap>
        {posts.length? <Feed posts={posts} /> : <None />}
      </ListWrap>
    </Container>
  );
}

export default MainConatiner;