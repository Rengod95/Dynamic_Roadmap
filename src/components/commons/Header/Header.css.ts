import { FlexBoxCreator, FlexListItem, FlexListItemProps } from '@/components/layout/FlexBox';
import styled, { StyledComponent } from '@emotion/styled';
import Link from 'next/link';

export const Root = styled.header`
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

export const Body = styled.nav`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderItemList = styled(FlexBoxCreator.createDefaultFlexBox('ul'))`
  justify-content: flex-end;
  height: 100%;
`;

export const NavListItem: StyledComponent<FlexListItemProps> = styled(FlexListItem)`
  min-width: 100px;
  height: inherit;
  cursor: pointer;
  text-decoration: none;
  padding: 0 10px;
  transition: all 400ms ease;
  &:hover {
  }
`;

export const RouterLink = styled(FlexBoxCreator.createDefaultFlexBox(Link))`
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
