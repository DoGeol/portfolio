import React from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import styled from 'styled-components';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Contents from '../components/Contents/Contents';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';

const store = createStore(rootReducer);

const AppWrapper = styled.div`
  width: calc(100% - 50px);
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper>
          <GlobalStyles />
          <MainNav />
          <Contents />
          <Footer />
        </AppWrapper>
      </Provider>
    </BrowserRouter>
  );
}