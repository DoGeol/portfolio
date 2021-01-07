import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  left: 0;
  width: 100vw;
  bottom: 0;
  height: 22px;
  display: flex;
  position: fixed;
  background: #21252b;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  justify-content: space-between;
`;

function Footer() {
  return (
    <FooterContainer></FooterContainer>
  );
}

export default Footer;