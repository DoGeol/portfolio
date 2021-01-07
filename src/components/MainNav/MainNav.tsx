import React from 'react';
import styled from 'styled-components';

const MainNavContainer = styled.nav`
  top: 0;
  left: 0;
  width: 50px;
  height: 100vh;
  display: flex;
  position: fixed;
  background: #333842;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

function MainNav() {
  return (
    <MainNavContainer></MainNavContainer>
  );
}

export default MainNav;