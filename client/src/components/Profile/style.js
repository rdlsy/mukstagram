import styled, { css } from "styled-components";

export const ProfileWrap = styled.section`
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  background-color: ${props => props.theme.colors.contBgColor};
  .Wrap {
    display: flex;
    flex-direction: row;
    padding: 0 16px 44px;
  }
  @media ${props => props.theme.mobile} {
    padding-top: 16px;
    .Wrap {
      padding-bottom: 24px;
    }
  }
`;
export const Img = styled.div`
  margin-right: 30px;
  flex-grow: 1;
  div {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border: 1px solid rgba(0,0,0,.0975);
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 150px;
  }
  @media ${props => props.theme.mobile} {
    margin-right: 28px;
    flex-grow: inherit;
    div {
      width: 77px;
      height: 77px;
    }
    img {
      width: 77px;
    }
  }
`;
export const Introduce = styled.div`
  flex-grow: 2;
  color: ${props => props.theme.colors.textColor};
  @media ${props => props.theme.mobile} {
    flex-grow: inherit;
  }
`;
export const Text = styled.p`
  padding-top: 1rem;
  color: ${props => props.theme.colors.textColor};
  ${props =>
    props.userId &&
    css`
      padding-top: 0;
      font-size: 1.8rem;
    `
  };
  ${props =>
    props.email &&
    css`
      font-size: 1.3rem;
    `
  };
  ${props =>
    props.description &&
    css`
      padding-top: 1.5rem;
      font-size: 1.1rem;
    `
  };
  ${props =>
    props.m_description &&
    css`
      display: none;
      font-size: 1rem;
    `
  };
  @media ${props => props.theme.mobile} {
    padding-top: 0.5rem;
    ${props =>
      props.userId &&
      css`
        padding-top: 0;
        font-size: 1.5rem;
      `
    };
    ${props =>
      props.email &&
      css`
        font-size: 1.1rem;
      `
    };
    ${props =>
      props.description &&
      css`
        display: none;
      `
    };
    ${props =>
      props.m_description &&
      css`
        padding: 0 16px 20px;
        display: block;
      `
    };
  }
`;
export const Article = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: ${props => props.theme.colors.bgColor};
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  font-size: 1rem;
  color: ${props => props.theme.colors.textColor};
`;