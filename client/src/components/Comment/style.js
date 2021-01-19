import styled, { keyframes } from 'styled-components';

export const CommentBlock = styled.div`
  position: relative;
  flex-grow: 1;
  overflow-y: hidden;
  @media ${props => props.theme.mobile} {
    position: relative;
  }
`;

export const CommentInsert = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: ${props => props.theme.colors.commInsertBgColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  &.commDetail {
    padding: 5px 0;
    background-color: ${props => props.theme.colors.bgColor};
    .profile {
      display: none !important;
    }
    .textarea {
      margin: 0;
      border: none;
    }
  }
  .profile {
    display: block;
    width: 32px;
    height: 32px;
    margin: 0 16px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.0975);
    }
  }
  .textarea {
    display: flex;
    width: 100%;
    margin-right: 16px;
    padding: 12px 16px;
    background-color: ${props => props.theme.colors.bgColor};
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 30px;
    textarea {
      flex-grow: 1;
      width: 0;
      font-size: .9rem;
      resize: none;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      color: ${props => props.theme.colors.textColor}
    }
    button {
      font-size: .9rem;
      font-weight: 600;
      color: #0095f6;
      cursor: pointer;
      :disabled {
        opacity: .5;
        cursor: default;
      }
    }
  }
`;

export const btnScale = keyframes`
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

export const CommentList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 52px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @media ${props => props.theme.mobile} {
    padding-top: 61px;
    &.active {
      padding-top: 105px;
    }
  }
  ::-webkit-scrollbar {
    display: none
  }
  .title {
    display: flex;
    padding: 12px 16px;
    &.top {
      padding: 16px;
      margin-bottom: 10px;
      border-bottom: 1px solid ${props => props.theme.colors.borderColor2};
    }
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
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
  .description {
    padding-bottom: 0;
    word-break: break-all;
    flex-grow: 1;
    span {
      cursor: pointer;
    }
    .name {
      font-weight: 600;
      color: #375472;
    }
  }
  .like {
    margin-top: 9px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
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

export const CommentReply = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.commInsertBgColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  font-size: .9rem;
  color: #8e8e8e;
  button {
    display: flex;
    cursor: pointer;
    svg {
      font-size: 1.2rem;
    }
  }
`;

export const MoreBtn = styled.div`
  margin: 0 0 10px 65px;
  width: calc(100% - 65px);
  button {
    font-size: .7rem;
    font-weight: 600;
    color: #8e8e8e;
    cursor: pointer;
    div {
      display: inline-block;
      width: 24px;
      height: 1px;
      margin-right: 16px;
      vertical-align: middle;
      background-color: #8e8e8e;
    }
  }
`;
export const Reply = styled.div`
  padding-left: 47px;
  .reply {
    padding-left: 0;
  }
  .bar {
    margin-left: 16px;
  }
`;