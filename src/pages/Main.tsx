import React from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import GlobalStyles from '../components/Common/GlobalStyles/GlobalStyles';

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