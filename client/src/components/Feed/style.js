import styled from "styled-components";

export const PostList = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 0 44px;
  background-color: ${props => props.theme.colors.contBgColor};
  .post {
    width: 100%;
    background-color: ${props => props.theme.colors.bgColor};
    border: 1px solid ${props => props.theme.colors.borderColor};
  }
  .btns {
    display: flex;
  }
  @media ${props => props.theme.mobile} {
    padding: 0 0 44px;
    margin: 0 -1px -1px;
    background-color: ${props => props.theme.colors.bgColor};
    .post {
      padding: 1px;
      margin: 0;
      border: none;
    }
  }
`;