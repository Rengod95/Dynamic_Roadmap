import styled, { StyledComponent } from '@emotion/styled';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { FlexListItem, FlexListItemProps, createFlexBox } from '../FlexElement';

interface NavItemData {
  title: string;
  url: string;
}

const NAV_ITEM_DATAS: Array<NavItemData> = [
  { title: '커뮤니티', url: '/board/post' },
  { title: '로드맵 게시판', url: '/board/roadmap' },
  { title: '개인 페이지', url: '/member' },
];

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <NavItemList>
          {NAV_ITEM_DATAS.map((item: NavItemData) => (
            <NavListItem key={item.url}>
              <StyledLink href={item.url}>{item.title}</StyledLink>
            </NavListItem>
          ))}
        </NavItemList>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(30px);
  background-color: #2e3267;
  color: inherit;
  box-shadow: 0 2px 10px rgba(21, 21, 69, 0.2);
  padding: 0 2rem;
  top: 0;
`;

const HeaderNav = styled.nav`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const NavItemList = styled(createFlexBox('ul'))`
  justify-content: flex-end;
  height: 100%;
`;

const NavListItem: StyledComponent<FlexListItemProps> = styled(FlexListItem)`
  min-width: 100px;
  height: inherit;
  cursor: pointer;
  text-decoration: none;
  padding: 0 10px;
  transition: all 400ms ease;
  &:hover {
  }
`;

const StyledLink = styled(createFlexBox(Link))`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  height: inherit;
  width: 100%;
  transition: all 400ms ease;
  &:hover {
    color: #00bf8e;
  }
`;
