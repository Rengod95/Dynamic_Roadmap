import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

interface NavItem {
  title: string;
  url: string;
}

const NAV_SET: Array<NavItem> = [
  { title: '커뮤니티', url: '/board/post' },
  { title: '로드맵 게시판', url: '/board/roadmap' },
  { title: '개인 페이지', url: '/member' },
];

const Header = () => {
  return (
    <Container>
      <Layout>
        <MenuLayout>
          {NAV_SET.map((item: NavItem) => (
            <NavItem key={item.url}>
              <StyledLink href={item.url}>{item.title}</StyledLink>
            </NavItem>
          ))}
        </MenuLayout>
      </Layout>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  ${(props) => {
    return `
      `;
  }}
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

const Layout = styled.nav`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const MenuLayout = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const NavItem = styled.li`
  min-width: 100px;
  height: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 10px;
  transition: all 400ms ease;
  &:hover {
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms ease;
  &:hover {
    color: #00bf8e;
  }
`;
