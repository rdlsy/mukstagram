import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorText } from '../custom';

const InputWrap = styled.div`
  padding: 8px 0;
  &.completion {
    label {
      padding: 0 5px;
      background-color: ${props => props.theme.colors.bgColor};;
      color: #2196f3;
      transform: translate(0, -11px) scale(0.75);
    }
  }
`;
const Input = styled.div`
  position: relative;
  height: 56px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 4px;
  input {
    width: 100%;
    padding: 18.5px 14px;
    height: 56px;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textColor};
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    font-size: 1.2rem;
    color: #8e8e8e;
    transform: translate(14px, 18px) scale(1);
    transition: 0.3s;
  }
  &.focused {
    border-width: 2px;
    border-color: #2196f3;
    label {
      padding: 0 5px;
      background-color: ${props => props.theme.colors.bgColor};
      color: #2196f3;
      transform: translate(0, -11px) scale(0.75);
    }
  }
`;

function InputBox({ type, id, name, value, label, onChange, errors, touched, autocomplete }) {
  const [focus, setFocus] = useState('');
  return (
    <InputWrap className={value ? 'completion' : ''}>
      <Input className={focus === id ? 'focused' : ''}>
        <label htmlFor={id}>{label}</label>
        <input 
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={(e) => setFocus(e.target.id)}
          onBlur={() => setFocus('')}
          autoComplete={autocomplete}
        />
      </Input>
      {errors && touched && (
        <ErrorText>{errors}</ErrorText>
      )}
    </InputWrap>
  );
}

export default InputBox;