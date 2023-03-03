import React from 'react';
import * as S from './Header.css';

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
    <S.Root>
      <S.Body>
        <S.HeaderItemList>
          {NAV_ITEM_DATAS.map((item: NavItemData) => (
            <S.NavListItem key={item.url}>
              <S.RouterLink href={item.url}>{item.title}</S.RouterLink>
            </S.NavListItem>
          ))}
        </S.HeaderItemList>
      </S.Body>
    </S.Root>
  );
};
