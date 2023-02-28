import styled from '@emotion/styled';
import { FlexBoxCreator, FlexListItem } from '../../layout/FlexBox';

export const Root = styled(FlexBoxCreator.columnStartFlexBox('section'))`
  width: 1080px;
  min-height: 720px;
`;

export const PostItemList = styled(FlexBoxCreator.columnStartFlexBox('ul'))`
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

export const PostListItem = styled(FlexListItem)`
  width: 100%;
  height: 60px;
  flex-wrap: wrap;
`;
