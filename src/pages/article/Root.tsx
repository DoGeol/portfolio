import React from 'react';
import { ArticleContainer, ArticleMainTitle } from '../../styled/common/ArticleStyled';
import styled from 'styled-components';
import TypingText from '../../components/Common/TypingText';

const ArticleContainerWrapper = styled(ArticleContainer)`
  height: calc(100vh - 80px);
`;

function Root() {
  return (
    <ArticleContainerWrapper align='center'>
      <ArticleMainTitle textAlign='center'>
        <TypingText isTyping={true} mainText={'Getting Started...'} textColor={'whitesmoke'} />
      </ArticleMainTitle>
      <p>PDG's 포트폴리오</p>
    </ArticleContainerWrapper>
  );
}

export default Root;