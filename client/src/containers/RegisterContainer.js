import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register/Register';
import { registerUser } from '../_action/user_action';

function RegisterContainer(props) {
  const dispatch = useDispatch();

  const onSubmit = useCallback(({ name, email, password, image }) => {
    dispatch(registerUser({ name, email, password, image }))
      .then(response => {
        if (response.payload.success) {
          props.history.push('/login');
        } else {
          alert(response.payload.err.errmsg)
        }
      })
    
  }, [dispatch, props.history]);

  return <Register onSubmit={onSubmit} />
}

export default withRouter(RegisterContainer);