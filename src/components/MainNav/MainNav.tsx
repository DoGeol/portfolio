import React from 'react';
import styled from 'styled-components';
import IconCard from './IconCard';
import { mainNav } from '../../data/portfolio';

const MainNavWrapper = styled.div`
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

  @media screen and ${props => props.theme.viewport.mobile} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    z-index: 9999;
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

  @media screen and ${props => props.theme.viewport.mobile} {
    flex-direction: row;
    padding: 0 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function MainNav() {
  return (
    <MainNavWrapper>
      <NavWarpper>
        {
          mainNav.map((item, idx) => {
            return (
              <IconCard mainNavInfo={item} key={`mainNavItem` + idx} isHome={idx === 0} />
            );
          })
        }
      </NavWarpper>
      <NavWarpper>
        <IconCard mainNavInfo={{
          id: 0,
          name: 'Open to Settings Tab',
          url: '#',
          faClass: 'fas fa-cog',
          type: 'current',
        }} isHome={false} />
      </NavWarpper>
    </MainNavWrapper>
  );
}

export default MainNav;