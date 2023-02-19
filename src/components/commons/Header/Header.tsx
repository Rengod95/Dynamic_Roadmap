import React from 'react';
import { Nav, NavItemList, NavListItem, Root, StyledLink } from './Header.css';

export type NavItemData = {
  title: string;
  url: string;
};

export const NAV_ITEM_DATAS: Array<NavItemData> = [
  { title: '커뮤니티', url: '/board/post' },
  { title: '로드맵 게시판', url: '/board/roadmap' },
  { title: '개인 페이지', url: '/member' },
];

export const Header = () => {
  return (
    <Root>
      <Nav>
        <NavItemList>
          {NAV_ITEM_DATAS.map((item: NavItemData) => (
            <NavListItem key={item.url}>
              <StyledLink href={item.url}>{item.title}</StyledLink>
            </NavListItem>
          ))}
        </NavItemList>
      </Nav>
    </Root>
  );
};
