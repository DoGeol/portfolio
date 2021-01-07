import React from 'react';
import styled from 'styled-components';
import FileCard from './Header/FileCard';
import { Route } from 'react-router';
import { headerInfo } from '../../data/portfolio';
import useContents from './useContents';

const FileTab = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  position: sticky;
  background: #21252b;
  display: flex;
  align-items: center;
`;
const Article = styled.div`
  height: 2000px;
  width: 100%;
  background: #282c34;
  box-sizing: border-box;
`;
const ContentsWrapper = styled.section`
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

function Contents() {
  return (
    <ContentsWrapper>
      <FileTab>
        {
          headerInfo.map((file, idx) => {
            return <FileCard info={file} key={`filecard-${idx}`} />;
          })
        }
      </FileTab>
      <Article>
        <Route path='/about'>
          내용영역
        </Route>
        <Route exact path='/'>
          기본영역
        </Route>
      </Article>
    </ContentsWrapper>
  );
}

export default Contents;