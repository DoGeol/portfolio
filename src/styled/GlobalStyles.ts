import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset}

  ;
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 15px;
    //background-color: rgba(20, 20, 20, 1);
  }
`;

export const ArticleMainTitle = styled.h1`
  margin: 20px 0;

  &:first-child {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;
export const ArticleContainer = styled.div<any>`
  width: 100%;
  height: calc(100vh - 52px);
  padding: 20px;
  display: block;
  color: #949494;

  ${'h1'} {
    color: #c5c5c5;
    font-size: 30px;
    font-weight: 700;
  }

  ${'p'} {
    margin-top: 10px;
  }

  @media screen and ${props => props.theme.mobile} {
    margin-top: 30px;
  }
`;

export default globalStyles;