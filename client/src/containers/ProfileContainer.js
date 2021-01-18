import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';

function ProfileContainer() {
  const user = useSelector(state => state.user)

  if (user.userData) {
    return <Profile user={user.userData} />
  } else {
    return <div>로딩중...</div>
  }
}

export default ProfileContainer;