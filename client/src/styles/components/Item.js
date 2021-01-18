import React from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";

const ItemBlock = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 16px;
  margin-bottom: 12px;
  height: 46px;
  background-color: ${props => props.theme.colors.bgColor};
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  font-size: 1rem;
  color: ${props => props.theme.colors.textColor};
  ${props =>
    props.onOff &&
    css`
      svg {
        font-size: 1.6rem;
      }
    `
  };
`;

export default function Item({ text, icon, onClick }) {
  return (
    <ItemBlock onClick={onClick}>
      {text}
      <IoIosArrowForward />
    </ItemBlock>
  );
}