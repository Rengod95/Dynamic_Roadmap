import { Flex } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';

export const Root = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 100;
  background-color: #2e3267;
  top: 0;
`;

export const Body = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0 16px;
`;

export const HeaderItemList = styled(Flex)`
  height: 100%;
  width: 100%;
`;

export const NavListItem = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const RouterLink = styled(Flex)`
  color: #fff;
  font-size: 1rem;
  height: inherit;
  width: 100%;
  transition: all 400ms ease;
  &:hover {
    color: #00bf8e;
  }
`;
