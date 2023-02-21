import { FlexBoxCreator } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';

export const Root = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  height: 80px;
`;
export const NavBody = styled(FlexBoxCreator.rowStartFlexBox('div'))`
  width: 100%;
  height: 100%;
`;

export const ItemContainer = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  width: 100%;
  height: 100%;
`;

export const ItemList = styled(FlexBoxCreator.rowStartFlexBox('ul'))`
  background-color: red;
  width: 100%;
  height: 100%;
`;
