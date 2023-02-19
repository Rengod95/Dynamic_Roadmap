import { FlexBoxCreator } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';

export const PostNavContainer = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  height: 80px;
`;
export const PostNavLayout = styled(FlexBoxCreator.rowStartFlexBox('div'))`
  width: 100%;
  height: 100%;
`;

export const PostNavItemContainer = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  width: 100%;
  height: 100%;
`;

export const PostNavNumberList = styled(FlexBoxCreator.rowStartFlexBox('ul'))`
  background-color: red;
  width: 100%;
  height: 100%;
`;
