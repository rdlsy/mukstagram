import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import ToastPopup from '../components/ToastPopup/ToastPopup';
import { registerUser } from '../_action/user_action';

function RegisterContainer(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onSubmit = useCallback(({ name, email, password, image }) => {
    dispatch(registerUser({ name, email, password, image }))
      .then(response => {
        if (response.payload.success) {
          setOpen(true);
          setTimeout(() => {
            props.history.push('/login');
          }, 2000)
        } else {
          alert(response.payload.err.errmsg)
        }
      })
    
  }, [dispatch, props.history]);

  return (
    <>
      {open && <ToastPopup text="회원가입에 성공했습니다. ☺️" />}
      <Register onSubmit={onSubmit} />
    </>
  )
}

export default withRouter(RegisterContainer);