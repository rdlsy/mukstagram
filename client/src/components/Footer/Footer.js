import React from 'react';
import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";
import { Box } from '../../styles/custom';
import { Link, withRouter } from 'react-router-dom';
import { NavWrap } from './style';
import { useSelector } from 'react-redux';

function Footer(props) {
  const user = useSelector(state => state.user);
  const pathName = props.location.pathname;
  const link = {
    home: '/mukjya',
    upload: '/upload',
    profile: '/profile'
  };
  
  return (
    <NavWrap>
      <Box>
        <Link to={link.home}>
          {
            pathName === link.home ? <AiTwotoneHome /> : <AiOutlineHome />
          }
        </Link>
        <Link to={link.upload} className={user.userData && !user.userData.isAuth ? 'disable' : ''}>
          {
            pathName === link.upload ? <MdAddCircleOutline /> : <MdAddCircleOutline />
          }
        </Link>
        <Link to={link.profile}>
          {
            pathName === link.profile ? <HiUserCircle /> : <HiOutlineUserCircle />
          }
        </Link>
      </Box>
    </NavWrap>
  );
};

export default withRouter(Footer);