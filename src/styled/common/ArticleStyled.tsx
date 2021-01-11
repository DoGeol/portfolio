import styled, { css } from 'styled-components';

const heading = css`
  color: #c5c5c5;
  margin: 20px 0;

  &:first-child {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleSubTitle = styled.h2`
  font-size: 25px;
  font-weight: 500;
  ${heading}
`;

export const ArticleMainTitle = styled.h1<any>`
  font-size: 35px;
  font-weight: 700;
  text-align: ${(props) => props.textAlign};
  ${heading}
`;

export const ArticleSection = styled.section`
  width: 95%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ArticleContainer = styled.div<any>`
  width: 100%;
  padding: 20px;
  display: block;
  color: #949494;

  ${(props) => {
    if (props.align === 'center') {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      `;
    }
  }}
  > ${ArticleMainTitle}
  > ${ArticleSubTitle}
  p {
    &:first-child {
      margin-top: 10px;
    }
  }

  @media screen and ${props => props.theme.viewport.mobile} {
    margin-top: 30px;
  }
`;