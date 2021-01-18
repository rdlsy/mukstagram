import styled from 'styled-components';

export const ToastBlock = styled.div`
  position: fixed;
  top: 5rem;
  left: 50%;
  padding: 1rem 2rem;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.popupBgColor};
  box-shadow: 0 0 5px 1px rgba(0,0,0,.0975);
  border-radius: 10px;
  color: ${props => props.theme.colors.popupTextColor};
  white-space:nowrap;
  opacity: 0;
  transition: .3s;
  z-index: 12;
  &.open {
    opacity: 1;
    top: 6rem;
  }
`;