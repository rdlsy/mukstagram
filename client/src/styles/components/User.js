import React from 'react';
import styled from 'styled-components';

const UserBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 16px;
  background-color: ${props => props.theme.colors.bgColor};
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textColor};
  .profile {
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.0975);
    }
  }
`;

function User({ userName, image }) {
  return (
    <UserBlock className="userInfo">
      <span className="profile"><img src={image} alt="" /></span>
      {userName}
    </UserBlock>
  );
}

export default User;