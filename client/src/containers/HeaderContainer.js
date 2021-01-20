import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import ToastPopup from '../components/ToastPopup/ToastPopup';
import { logoutUser } from '../_action/user_action';

function HeaderContainer(props) {
  const { toggleTheme, theme } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  const onLogout = useCallback(() => {
    dispatch(logoutUser())
      .then(response => {
        if (response.payload.success) {
          setOpen(true);
          window.localStorage.removeItem('userId');
          setTimeout(() => {
            props.history.push('/login');
            setOpen(false);
          }, 2000)
        } else {
          alert('Log Out Failed')
        }
      })
  },[dispatch, props.history]);

  return (
    <>
      {open && <ToastPopup text="로그아웃 되었습니다. 😢" />}
      <Header onLogout={onLogout} toggleTheme={toggleTheme} theme={theme} user={user} />
    </>
  )
}

export default withRouter(HeaderContainer);