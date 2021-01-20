import React, { useState, useEffect } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import { Container, Box } from '../styles/custom';
import { ListWrap, Layout } from '../components/Grid/style';
import Grid from '../components/Grid/Grid';
import { getMyPosts } from '../_action/post_action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import None from '../components/None';
import Profile from '../components/Profile/Profile';
import Feed from '../components/Feed/Feed';

function ProfileContainer(props) {
  const url = props.match.url;
  const pathName = props.location.pathname;
  const user = useSelector(state => state.user);
  const userId = window.localStorage.getItem('userId');
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)
    const variable = { userId };
    dispatch(getMyPosts(variable))
      .then(response => {
        if (response.payload.success) {
          let data = response.payload.posts;
          setLoading(false);
          setPosts(data.reverse());
        } else {
          alert('Failed to get files');
        }
      })
  }, [dispatch, userId]);

  console.log(url, pathName)

  return (
    <Container mypage>
      {loading && <Loading />}
      {user.userData && <Profile user={user.userData} />}
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
          render={() => posts.length ? <Grid posts={posts} /> : <None />}
        />
        <Route 
          path={`${url}/feed`} 
          render={() => posts.length ? <Feed posts={posts} /> : <None />}
        />
      </ListWrap>
    </Container>
  )
}

export default withRouter(ProfileContainer);