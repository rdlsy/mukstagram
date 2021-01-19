import React, { useState, useEffect } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import { Container, Box } from '../styles/custom';
import { ListWrap, Layout } from '../components/Main/style';
import Main from '../components/Main/Main';
import Feed from '../components/Feed/Feed';
import { getPosts } from '../_action/post_action';
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading/Loading';
import None from '../components/None';

function MainConatiner(props) {
  const url = props.match.url;
  const pathName = props.location.pathname;
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
        <Layout>
          <Box>
            <Link className={url === pathName ? 'active' : ''} to={url}><BsGrid3X3 /></Link>
            <Link className={`${url}/feed` === pathName ? 'active' : ''} to={`${url}/feed`}><BsViewList /></Link>
          </Box>
        </Layout>
        <Route 
          exact
          path={url} 
          render={() => posts.length ? <Main posts={posts} /> : <None />}
        />
        <Route 
          path={`${url}/feed`} 
          render={() => posts.length ? <Feed posts={posts} /> : <None />}
        />
      </ListWrap>
    </Container>
  );
}

export default withRouter(MainConatiner);