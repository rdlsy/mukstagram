import styled from 'styled-components';

export const Logo = styled.h1`
  a {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.textColor};
  }
  @media ${props => props.theme.mobile} {
    a {
      font-size: 1.3rem;
    }
  }
`;
export const Popup = styled.div`
  position: absolute;
  top: 53px;
  right: 0;
  background-color: ${props => props.theme.colors.contBgColor};
  box-shadow: 0 0 5px 1px rgba(0,0,0,.0975);
    div {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    ul {
      position: relative;
      z-index: 2;
      li {
        a, button {
          width: 170px;
          max-width: 100%;
          display: flex;
          align-items: center;
          padding: 8px 16px;
          font-size: 1rem;
          color: ${props => props.theme.colors.textColor};
          cursor: pointer;
        }
        svg {
          margin-right: 10px;
          font-size: 1.4rem;
        }
        :last-child {
          border-top: 1px solid ${props => props.theme.colors.borderColor};
        }
      }
    }
  @media ${props => props.theme.mobile} {
    top: 43px;
  }
`;