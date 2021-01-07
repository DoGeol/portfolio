import React, { lazy, Suspense } from 'react';
import GlobalStyles from '../styled/GlobalStyles';
import styled from 'styled-components';
import MainNav from '../components/MainNav/MainNav';
import Footer from '../components/Footer/Footer';
import Root from './article/Root';
import FileTab from '../components/Contents/FileTab/FileTab';
import Loading from './article/Loading';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';

const About = lazy(() => import('./article/About'));
const Project = lazy(() => import('./article/Project'));
const Skill = lazy(() => import('./article/Skill'));
const NotFound = lazy(() => import('./article/NotFound'));

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
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path={'/portfolio'} component={Root} />
                  <Route path={'/portfolio/project'} component={Project} />
                  <Route path={'/portfolio/skill'} component={Skill} />
                  <Route path={'/portfolio/about'} component={About} />
                  <Route path={'/portfolio/notFound'} component={NotFound} />
                  <Redirect path='*' to={'/portfolio/notFound'} />
                </Switch>
              </Suspense>
            </Article>
          </Contents>
          <Footer />
        </AppWrapper>
      </Provider>
    </BrowserRouter>
  );
}