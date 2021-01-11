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

export const ArticleContainer = styled.div<any>`
  width: 100%;
  height: calc(100vh - 52px);
  padding: 20px;
  display: block;

  ${'h1'} {
    color: #365fe3;
    font-size: 24px;
    font-weight: 700;
  }

  @media screen and ${props => props.theme.mobile} {
    margin-top: 30px;
  }
`;

export default globalStyles;