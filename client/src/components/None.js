import React from 'react';
import { FiCamera } from "react-icons/fi";
import styled from 'styled-components';

const NoneBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background-color: ${props => props.theme.colors.contBgColor};
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textColor};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    width: 62px;
    height: 62px;
    border: 2px solid ${props => props.theme.colors.textColor};
    border-radius: 50%;
    font-size: 1.7rem;
    svg {
      color: ${props => props.theme.colors.textColor};
    }
  }
`;

function None() {
  return (
    <NoneBlock>
      <span><FiCamera /></span>
      게시물 없음
    </NoneBlock>
  );
}

export default None;