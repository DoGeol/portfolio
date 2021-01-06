import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 80px;
  padding: 0 20px;
  top: 0;
  background: #39424c;
  width: 100%;
  z-index: 9999;
  box-sizing: border-box;
  border-bottom: 1px solid #38393a;
  position: fixed;
`;

const HeaderLogo = styled.div`
  float: left;
  padding: 24px 0;
  font-size: 32px;
  color: white;
`;

const HeaderNav = styled.ul`
  height: 100%;
  float: right;
  display: flex;
  padding: 24px 0;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    margin-right: 10px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo>
        <i className={`fab fa-github`} />
      </HeaderLogo>
      <HeaderNav>
        <HeaderNavItem tabName={'About'} href={'#test'} />
        <HeaderNavItem tabName={'Skill'} href={'#test'} />
        <HeaderNavItem tabName={'Project'} href={'#test'} />
        <HeaderNavItem tabName={'Contact'} href={'#test'} />
      </HeaderNav>
    </StyledHeader>
  );
}

const NavItem = styled.li`
  color: white;
  font-size: 16px;

  ${'a'} {
    padding: 20px 10px;

    &:hover {
      border-bottom: 3px solid white;
      transition: .1s ease-out;
    }
  }
`;

interface navItemProps {
  tabName: string;
  href: string;
}

function HeaderNavItem(props: navItemProps) {
  return (
    <NavItem><a href={props.href}>{props.tabName}</a></NavItem>
  );
}

export default Header;