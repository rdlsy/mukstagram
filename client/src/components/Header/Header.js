import React, { useState } from 'react';
import { Box, HeaderWrap } from '../../styles/custom';
import { IoMdSettings } from "react-icons/io";
// import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi"
import { IoIosSettings } from "react-icons/io"
import { Link } from 'react-router-dom';
import { Logo, Popup } from './style';

export default function Header({ onLogout, toggleTheme, theme, user }) {

  const [active, setActive] = useState(false);

  const onClickHandler = () => {
    onLogout();
  }

  return (
    <HeaderWrap>
      <Box header>
        {/* <button><IoPaperPlaneOutline /></button> */}
        <button onClick={toggleTheme}>
          {
            theme === 'light' ?
            <BsToggleOff /> :
            <BsToggleOn />
          }
        </button>
        <Logo><Link to="/">mukstagram</Link></Logo>
        {
          user.userData && !user.userData.isAuth ?
          <button onClick={() => setActive(!active)}>
            <IoMdSettings />
          </button> :
          <button onClick={() => setActive(!active)}>
            <IoIosSettings />
          </button>
        }
      </Box>
      {
        active &&
        <Popup>
          <div onClick={() => setActive(!active)}></div>
          <ul onClick={() => setActive(!active)}>
            <li><Link to="/profile"><BiUserCircle />프로필</Link></li>
            {
              user.userData && !user.userData.isAuth ?
              <li><Link to="/login">로그인</Link></li> :
              <li><button onClick={onClickHandler}>로그아웃</button></li>
            }
          </ul>
        </Popup>
      }
    </HeaderWrap>
  );
}