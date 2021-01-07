import styled, { createGlobalStyle } from 'styled-components';
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

export const ArticleContainer = styled.div`
  padding: 20px;
`;

export default globalStyles;