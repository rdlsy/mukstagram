import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/Login/Login';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../_action/user_action';
import ToastPopup from '../components/ToastPopup/ToastPopup';

function LoginContainer(props) {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);

  const onSubmit = useCallback(({ email, password }) => {
    dispatch(loginUser({ email, password }))
      .then(response => {
        if (response.payload.loginSuccess) {
          setOpen(true);
          setTimeout(() => {
            props.history.push('/mukjya');
          }, 2000)
        } else {
          setErrorMsg('Check out your Account or Password again')
        }
      })
      .catch(err => {
        setErrorMsg('Check out your Account or Password again')
        setTimeout(() => {
          setErrorMsg('')
        }, 2000);
      });

  },[dispatch, props.history]);
  
  return (
    <>
      {open && <ToastPopup text="로그인에 성공했습니다. ☺️" />}
      <Login onSubmit={onSubmit} errorMsg={errorMsg} open={open} />
    </>
  )
}

export default withRouter(LoginContainer);