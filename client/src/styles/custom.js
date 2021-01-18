import styled, { css } from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.bgColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  z-index: 10;
  svg {
    color: ${props => props.theme.colors.textColor}
  }
  @media ${props => props.theme.mobile} {
    height: 44px;
    padding: 0 16px;
  }
  ${props =>
    props.popup &&
    css`
      .share {
        font-size: 1.1rem;
        font-weight: bold;
        color: #0095f6;
      }
      .back {
        cursor: pointer;
        color: ${props => props.theme.colors.textColor}
      }
    `
  };
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 56px 0 64px;
  background-color: ${props => props.theme.colors.contBgColor};
  @media ${props => props.theme.mobile} {
    padding: 46px 0 64px;
  }
  ${props =>
    props.popup &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 54px 0 0;
      z-index: 11;
      @media ${props => props.theme.mobile} {
        padding: 44px 0 0;
      }
    `
  };
  ${props =>
    props.detail &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      min-height: auto;
      padding: 84px 20px 0;
      z-index: 11;
      overflow-y: auto;
      .post {
        width: 100%;
        max-width: 935px;
        min-height: 450px;
        padding-right: 335px;
        margin: 0 auto;
        border: 1px solid ${props => props.theme.colors.borderColor};
        .img {
          width: 100%;
        }
        .textBox {
          display: flex;
          flex-direction: column;
          position: absolute;
          right: 0;
          top: 0;
          width: 335px;
          height: 100%;
          background-color: ${props.theme.colors.bgColor};
          border-left: 1px solid ${props => props.theme.colors.borderColor};
          .profile {
            display: flex;
          }
          .commentList {
            display: block;
            .title {
              margin-top: -16px;
            }
          }
          .comment {
            display: block;
          }
          .title {
            display: flex;
            padding: 16px;
            order: -1;
          }
          .date {
            display: block;
          }
        }
      }
      &.comm {
        padding: 54px 0 20px;
      }
      @media ${props => props.theme.mobile} {
        padding: 44px 0 0;
        .post {
          max-width: 100%;
          min-height: auto;
          padding-right: 0;
          border: none;
          .img {
            margin: 0;
          }
          .textBox {
            position: inherit;
            right: inherit;
            top: inherit;
            width: 100%;
            height: auto;
            border-left: 0;
            .commentList {
              display: none;
            }
            .comment {
              display: none;
            }
            .profile {
              display: none;
            }
            .title {
              padding: 0 16px;
              order: inherit;
            }
            .date {
              display: none;
            }
          }
        }
        &.comm {
          padding: 44px 0 20px;
        }
      }
    `
  };
  ${props =>
    props.sign &&
    css`
      padding: 118px 32px 64px;
      background-color: ${props => props.theme.colors.bgColor};
      @media ${props => props.theme.mobile} {
        padding: 108px 16px 64px;
      }
    `
  }
  ${props =>
    props.mypage &&
    css`
      padding: 84px 0 0;
      @media ${props => props.theme.mobile} {
        padding: 60px 0 0;
      }
    `
  }
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textColor};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  button, a {
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 54px;
    font-size: 1.6rem;
    z-index: 2;
    cursor: pointer;
  }
  ${props =>
    props.header &&
    css`
      justify-content: space-between;
      button, a {
        flex-grow: inherit;
      }
    `
  };
  @media ${props => props.theme.mobile} {
    height: 44px;
    button, a {
      height: 44px;
    }
  }
`;

export const Text = styled.div`
  padding: 0 16px;
  padding-bottom: 8px;
  color: ${props => props.theme.colors.contTextColor};
  .profile {
    display: none;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    margin-right: 18px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,.0975);
    }
  }
  .description {
    padding: 7px 0 0;
    b {
      margin-right: 5px;
    }
    div {
      padding: 15px 0 4px;
      font-size: .7rem;
      font-weight: 600;
      color: #8e8e8e;
      span {
        margin-left: 10px;
      }
      &.count {
        padding: 10px 0 4px;
        font-size: inherit;
      }
    }
  }
  ${props =>
    props.date &&
    css`
      display: none;
      padding-top: 5px;
      padding-bottom: 15px;
      font-size: .7rem;
      color: #8e8e8e;
    `
  };
  @media ${props => props.theme.mobile} {
    &.title {
      padding: 0 16px;
      order: inherit;
    }
    .profile {
      display: none;
    }
    .description {
      padding: 0;
      padding-bottom: 15px;
    }
    ${props =>
      props.date &&
      css`
        display: none;
    `
    }
  }
`;

export const ErrorText = styled.p`
  color: #ff4d4f;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  margin: 24px 0px 16px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  font-size: 1.2rem;
  ${props =>
    props.blue &&
    css`
      background-color: #2196f3;
      color: #fff;
    `
  };
`;