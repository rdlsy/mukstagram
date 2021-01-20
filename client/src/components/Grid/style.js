import styled from "styled-components";

export const ListWrap = styled.section`
  background-color: ${props => props.theme.colors.contBgColor};
  @media ${props => props.theme.mobile} {
    background-color: ${props => props.theme.colors.bgColor};
  }
`;
export const Layout = styled.div`
  display: none;
  background-color: ${props => props.theme.colors.bgColor};
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  a {
    svg {
      color: #8e8e8e;
    }
    &.active {
      svg {
        color: ${props => props.theme.colors.textColor};
      }
    }
  }
  @media ${props => props.theme.mobile} {
    display: block;
  }
`;
export const PostList = styled.div`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 10px 64px;
  background-color: ${props => props.theme.colors.contBgColor};
  .post {
    position: relative;
    float: left;
    width: calc(100% / 3);
    padding: 10px;
    background-color: ${props => props.theme.colors.contBgColor};
    a {
      display: block;
      position: relative;
      padding-bottom: 100%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        border: none;
      }
    }
  }
  :after {
    content: '';
    display: block;
    clear: both;
  }
  .duration {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 4px;
    margin: 4px;
    background-color: rgba(17,17,17,.8);
    border-radius: 2px;
    opacity: 0.8;
    line-height: 12px;
    font-weight: 500;
    color: #fff;
  }
  .play {
    position: absolute;
    top: 5px;
    right: 5px;
    filter:
      drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2))
  }
  @media ${props => props.theme.mobile} {
    background-color: ${props => props.theme.colors.bgColor};
    padding: 0 0 44px;
    margin: 0 -1px -1px;
    .post {
      padding: 1px;
      border: none;
    }
  }
`;