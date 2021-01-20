import React from 'react';
import styled from 'styled-components';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const ItemBlock = styled.div`
  position: relative;
  label {
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
    color: ${props => props.theme.colors.contTextColor};
    cursor: pointer;
    svg {
      font-size: 1.6rem;
    }
  }
  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export default function Item({ text, value, onChange, name, checked }) {
  return (
    <ItemBlock onChange={onChange} name={name}>
      <label htmlFor={name}>
        {text}
        {value ? <BsToggleOn /> : <BsToggleOff />}
      </label>
      <input type="checkbox" id={name} name={name} value={value} />
    </ItemBlock>
  );
}