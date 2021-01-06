import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GlobalStyles from '../styled/GlobalStyles';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const ContentWrap = styled.div`
  flex: 1;
`;

export default function Main() {
  return (
    <StyledMain>
      <GlobalStyles />
      <Header />
      <ContentWrap>
        <div>메인페이지</div>
      </ContentWrap>
      <Footer />
    </StyledMain>
  );
}