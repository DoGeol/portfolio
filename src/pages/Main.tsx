import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GlobalStyles from '../styled/GlobalStyles';

export default function Main() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div>메인페이지</div>
      <Footer />
    </>
  );
}