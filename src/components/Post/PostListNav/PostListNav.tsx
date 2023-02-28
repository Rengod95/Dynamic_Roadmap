import * as S from './PostListNav.css';
import { SVGIcon } from '@/components/commons/Icon';
import { DefaultButton } from '@/components/commons/Button';
import { useInfinitePosts } from '../PostList/PostList.hooks';
import { ReactNode, useEffect, useState } from 'react';

type PostListNavProps = {};

export const PostListNav = ({}: PostListNavProps) => {
  const query = useInfinitePosts();

  return (
    <S.Root>
      <S.Body>
        <DefaultButton
          size={'medium'}
          variant={'default'}
          disabled={!query.hasPreviousPage || query.isFetchingPreviousPage}
          onClick={() => query.fetchPreviousPage()}>
          <SVGIcon iconName={'arrowLeft'} size={40} color={'black'} />
        </DefaultButton>
        <span>
          {query.data?.pageParams.map((page) => (
            <span key={page as number}>{page as ReactNode}</span>
          ))}
        </span>
        <DefaultButton
          size={'medium'}
          variant={'default'}
          disabled={!query.hasNextPage || query.isFetchingNextPage}
          onClick={() => query.fetchNextPage()}>
          <SVGIcon iconName={'arrowRight'} size={40} color={'black'} />
        </DefaultButton>
      </S.Body>
    </S.Root>
  );
};
