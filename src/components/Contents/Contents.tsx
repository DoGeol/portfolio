import React from 'react';
import styled from 'styled-components';

const ContentsContainer = styled.section`
  top: 0;
  left: 50px;
  right: 0;
  width: 100%;
  position: relative;
`;

function Contents() {
  return (
    <ContentsContainer></ContentsContainer>
  );
}

export default Contents;