import React from 'react';
import { ArticleContainer, ArticleMainTitle, ArticleSection } from '../../styled/common/ArticleStyled';
import styled from 'styled-components';

const NotFoundIcon = styled.i`
  font-size: 200px;
`;

const Title = styled(ArticleMainTitle)``;

const HighlightLink = styled.a`
  color: #b8b8b8;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: whitesmoke;
    text-decoration: underline;
  }
`;

const ArticleContainerWrapper = styled(ArticleContainer)`
  height: calc(100vh - 80px);
`;

function NotFound() {
  return (
    <ArticleContainerWrapper align='center'>
      <NotFoundIcon className='far fa-frown' />
      <ArticleSection>
        <Title textAlign='center'>Page not found</Title>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
        <p>궁금하신 점이 있으시면 언제든 <HighlightLink href='https://github.com/DoGeol/portfolio/issues' target='_blank'>Github
          Issues</HighlightLink>를 통해 문의해 주시기 바랍니다.</p>
      </ArticleSection>
    </ArticleContainerWrapper>
  );
}

export default NotFound;