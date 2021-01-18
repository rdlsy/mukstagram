import styled from 'styled-components';

export const NavWrap = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  z-index: 10;
  .disable {
    pointer-events: none;
    cursor: default;
    opacity: 0;
  }
  svg {
    color: ${props => props.theme.colors.textColor};
  }
`;