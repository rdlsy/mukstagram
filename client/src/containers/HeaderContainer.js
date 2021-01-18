import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { logoutUser } from '../_action/user_action';

function HeaderContainer(props) {
  const { toggleTheme, theme } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const onLogout = useCallback(() => {
    dispatch(logoutUser())
      .then(response => {
        if (response.payload.success) {
          props.history.push("/login");
        } else {
          alert('Log Out Failed')
        }
      })
  },[dispatch, props.history]);

  return <Header onLogout={onLogout} toggleTheme={toggleTheme} theme={theme} user={user} />;
}

export default withRouter(HeaderContainer);