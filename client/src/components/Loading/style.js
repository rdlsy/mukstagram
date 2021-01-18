import styled, { keyframes } from 'styled-components';

const loading1 = keyframes`
  0% {
    left: 0;
    transform: scale(0);
  }
  25% {
    left: 0;
    transform: scale(1);
  }
  50% {
    left: 30px;
    transform: scale(1);
  }
  75% {
    left: 60px;
    transform: scale(1);
  }
  100% {
    left: 60px;
    transform: scale(0);
  }
`;
const loading2 = keyframes`
  0% {
    left: 30px;
    transform: scale(1);
  }
  25% {
    left: 60px;
    transform: scale(1);
  }
  50% {
    left: 60px;
    transform: scale(0); 
  }
  75% {
    left: 0;
    transform: scale(0);
  }
  100% {
    left: 30px;
    transform: scale(1);
  }
`;
const loading3 = keyframes`
  0% {
    left: 60px;
    transform: scale(0);
  }
  25% {
    left: 0;
    transform: scale(0);
  }
  50% {
    left: 0;
    transform: scale(1); 
  }
  75% {
    left: 30px;
    transform: scale(1);
  }
  100% {
    left: 60px;
    transform: scale(1);
  }
`;

export const LoadingBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  background-color: ${props => props.theme.colors.bgColor};
  .Loading {
    position: relative;
    display: flex;
    width: 84px;
    height: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    span {
      position: absolute;
      display: block;
      margin: 0 5px;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      &.l1 {
        left: 0;
        background-color: #f8b26a;
        animation: ${loading1} 0.8s linear infinite;
      }
      &.l2 {
        left: 30px;
        background-color: #abbd81;
        animation: ${loading2} 0.8s linear infinite;
      }
      &.l3 {
        left: 60px;
        background-color: #e15b64;
        animation: ${loading3} 0.8s linear infinite;
      }
    }
  }
`;