import React from 'react';
import styled from 'styled-components';
import IconCard from './IconCard/IconCard';

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

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
  }
`;

const NavWarpper = styled.nav`
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;

  &:last-child {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding: 0 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function MainNav() {
  return (
    <MainNavContainer>
      <NavWarpper>
        <IconCard faType={'fa-home'} />
        <IconCard faType={'fa-home'} />
        <IconCard faType={'fa-home'} />
      </NavWarpper>
      <NavWarpper>
        <IconCard faType={'fa-cog'} />
      </NavWarpper>
    </MainNavContainer>
  );
}

export default MainNav;