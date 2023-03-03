import React from 'react';
import * as S from './PostListNav.css';
import { Button } from '@/components/commons/Button';
import { SVGIcon } from '@/components/commons/Icon';

export const PostListNav = () => {
  //컴포넌트 네이밍 차후 수정
  return (
    <S.Nav>
      <S.NavBody>
        <S.ItemContainer>
          <Button size={'none'} variant={'transparent'}>
            <SVGIcon iconName={'arrowRight'} size={40} color={'white'} />
          </Button>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.ItemList></S.ItemList>
        </S.ItemContainer>
        <S.ItemContainer>
          <Button size={'none'} variant={'transparent'}>
            <SVGIcon iconName={'arrowRight'} size={40} color={'white'} />
          </Button>
        </S.ItemContainer>
      </S.NavBody>
    </S.Nav>
  );
};
