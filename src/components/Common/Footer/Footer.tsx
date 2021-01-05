import React from 'react';
import styled, { css } from 'styled-components';

const Copyright = styled.div`
  font-size: 20px;
  color: gray;
`;

const StyledFooter = styled.footer`
  width: auto;
  background: #39424c;
  padding: 0 20px;
  margin: 30px 0;
  height: 200px;

  ${`div.inner`} {
    width: 900px;
    margin: auto;

  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className='inner'>
        <Copyright>Copyright ⓒ 2020 PDG All Rights Reserved.</Copyright>
      </div>
    </StyledFooter>
  );
}

export default Footer;