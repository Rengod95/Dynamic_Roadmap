import React from 'react';
import { PostNavContainer, PostNavLayout, PostNavItemContainer, PostNavNumberList } from '.';
import { Button } from '@/components/commons/Button';
import { SVGIcon } from '@/components/commons/Icon';
export const PostListNav = () => {
  //컴포넌트 네이밍 차후 수정
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
