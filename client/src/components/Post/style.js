import styled, { keyframes } from 'styled-components';

const btnScale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const PostBlock = styled.div`
  position: relative;
  margin-bottom: 60px;
  .comment {
    display: none;
  }
  .commentList {
    display: none;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 0;
  }
`;
export const Img = styled.div`
  position: relative;
  padding-bottom: 100%;
  video, img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    border: none;
  }
`;
export const Btns = styled.div`
  display: flex;
  height: 40px;
  padding: 0 16px;
  margin-top: 4px;
  button, a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 2rem;
    cursor: pointer;
    :first-child {
      margin-left: -8px;
    }
    svg {
      color: ${props => props.theme.colors.textColor};
    }
    &.bubble {
      font-size: 1.8rem;
      transform: rotate(-90deg);
    }
    &.active {
      svg {
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${btnScale};
        animation-fill-mode: forwards;
        color: #ed4956;
      }
    }
  }
`;

export const CommentList = styled.div`
  order: -1;
  flex-grow: 2;
  .title {
    padding-top: 0; 
  }
  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

export const Comment = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;  
  width: 100%;
  padding: 0 16px;
  border-top: 1px solid #efefef;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    input {
      width: 0;
      flex-grow: 1;
    }
    button {
      font-weight: 600;
      color: #0095f6;
      :disabled {
        opacity: .5
      }
    }
  }
  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

export const DetailTop = styled.div`
  order: 1;
  @media ${props => props.theme.mobile} {
    order: inherit;
  }
`;