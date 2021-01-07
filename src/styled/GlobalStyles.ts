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
  display: flex;
  ${(props) => {
    if (props.align === 'center') {
      return css`
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;

export default globalStyles;