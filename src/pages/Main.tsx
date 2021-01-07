import React from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import styled from 'styled-components';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import NotFound from './NotFound';
import About from './About';
import Skill from './Skill';
import Project from './Project';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';
import FileTab from '../components/Contents/FileTab/FileTab';

const store = createStore(rootReducer);

const AppWrapper = styled.div`
  width: calc(100% - 50px);
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Contents = styled.section`
  top: 0;
  left: 50px;
  right: 0;
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    top: 50px;
    left: 0;
  }
`;

const Article = styled.div`
  height: 2000px;
  width: 100%;
  background: #282c34;
  box-sizing: border-box;
`;

export default function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper>
          <GlobalStyles />
          <MainNav />
          <Contents>
            <FileTab />
            <Article>
              <Switch>
                <Route exact path={'/'}>ROOT</Route>
                <Route path={'/project'} component={Project} />
                <Route path={'/skill'} component={Skill} />
                <Route path={'/about'} component={About} />
                <Route path={'/notFound'} component={NotFound} />
                <Redirect path='*' to={'/notFound'} />
              </Switch>
            </Article>
          </Contents>
          <Footer />
        </AppWrapper>
      </Provider>
    </BrowserRouter>
  );
}