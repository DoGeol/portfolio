import React from 'react';
import { ArticleContainer, ArticleMainTitle, ArticleSection, ArticleSubTitle } from '../../styled/common/ArticleStyled';
import Profile from '../../components/Contents/Article/Profile';

function About() {
  return (
    <ArticleContainer>
      <ArticleMainTitle>About Me</ArticleMainTitle>
      <ArticleSection>
        <Profile />
      </ArticleSection>
      <ArticleSection>
        <ArticleSubTitle>Introduce myself</ArticleSubTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleSubTitle>Career</ArticleSubTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleSubTitle>Personal Activities</ArticleSubTitle>
      </ArticleSection>
    </ArticleContainer>
  );
}

export default About;