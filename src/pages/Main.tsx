import React from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import styled from 'styled-components';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Contents from '../components/Contents/Contents';

const AppWrapper = styled.div`
  display: flex;
`;

export default function Main() {
  return (
    <>
      <GlobalStyles />
      <MainNav />
      <Contents />
      <Footer />
    </>
  );
}