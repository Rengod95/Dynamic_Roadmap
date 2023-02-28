import { FlexBoxCreator } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';

export const Root = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  height: 80px;
`;
export const Body = styled(FlexBoxCreator.rowStartFlexBox('div'))`
  width: 100%;
  height: 100%;
`;
