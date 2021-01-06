import React from 'react';
import styled from 'styled-components';
import Social from '../Social/Social';
import { clearfix } from '../../styled/GlobalMixin';

const Copyright = styled.div`
  margin-top: 30px;
  //font-size: 15px;
  //color: gray;
`;
const ContentsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${clearfix}
`;
const StyledFooter = styled.footer`
  width: auto;
  background: #39424c;
  padding: 0 20px;
  height: 150px;
  color: gray;
  ${ContentsWrapper}
`;

function Footer() {
  return (
    <StyledFooter>
      <ContentsWrapper>
        <Social />
        <Copyright>Copyright ⓒ 2020 PDG All Rights Reserved.</Copyright>
      </ContentsWrapper>
    </StyledFooter>
  );
}

export default Footer;