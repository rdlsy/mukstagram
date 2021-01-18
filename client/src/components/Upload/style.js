import styled from 'styled-components';

export const UploadContent = styled.div``;
export const UploadForm = styled.form`
  width: 100%;
`;
export const TextBox = styled.textarea`
  width: 100%;
  height: 48px;
  padding: 2px;
  font-size: 1rem;
  color: ${props => props.theme.colors.textColor};
  resize: none;
`;
export const DropBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.borderColor};
  }
  
`;
export const Img = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;
export const Drop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-left: 76px;
  margin-bottom: 12px;
  background-color: ${props => props.theme.colors.bgColor};
  border-top: 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  font-size: 1rem;
  color: ${props => props.theme.colors.textColor};
`;