import React from 'react';
import { FlexBoxCreator, FlexListItem } from '../layout/FlexBox';
import styled from '@emotion/styled';
import SVGIcon from '../commons/Icon/Icon';
import Button from '../commons/Button/Button';

export const PostListNav = () => {
  return (
    <PostNavContainer>
      <PostNavLayout>
        <PostNavItemContainer>
          <Button size={'none'} variant={'transparent'}>
            <SVGIcon iconName={'arrowRight'} size={40} color={'white'} />
          </Button>
        </PostNavItemContainer>
        <PostNavItemContainer>
          <PostNavNumberList></PostNavNumberList>
        </PostNavItemContainer>
        <PostNavItemContainer>
          <Button size={'none'} variant={'transparent'}>
            <SVGIcon iconName={'arrowRight'} size={40} color={'white'} />
          </Button>
        </PostNavItemContainer>
      </PostNavLayout>
    </PostNavContainer>
  );
};

const PostNavContainer = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  flex-wrap: nowrap;
  width: 1080px;
  height: 80px;
  margin: 0 auto;
`;
const PostNavLayout = styled('div')`
  display: grid;
  grid-template-columns: 1.5fr auto 1.5fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
`;

const PostNavItemContainer = styled(FlexBoxCreator.createDefaultFlexBox('div'))`
  width: 100%;
  height: 100%;
`;

const PostNavNumberList = styled(FlexBoxCreator.rowStartFlexBox('ul'))`
  background-color: red;
  width: 100%;
  height: 100%;
`;
