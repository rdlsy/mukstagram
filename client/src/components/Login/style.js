import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.9rem;
  color: ${props => props.theme.colors.textColor};
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 8px;
    background-color: #f50057;
    border-radius: 50%;
    font-size: 1.6rem;
    svg {
      color: #262626;
    }
  }
`;
export const LoginForm = styled.form`
  max-width: 600px;
  width: 100%;
  padding: 24px 0;
  margin: 0 auto;
`;
export const TextField = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.colors.textColor};
  a {
    color: #0095f6;
    :hover {
      text-decoration: underline;
    }
  }
`;