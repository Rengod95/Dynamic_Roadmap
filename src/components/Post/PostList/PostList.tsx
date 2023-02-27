import React, { useEffect, useState } from 'react';
import { usePosts, getPostAsync, PostResponse } from '.';
import * as S from './PostList.css';
import { DefaultButton } from '@/components/commons/Button';
import { SVGIcon } from '@/components/commons/Icon';

export type PostListProps = {
  data: PostResponse | undefined;
};

export const PostList = ({ data }: PostListProps) => {
  return (
    <S.Root>
      <S.PostItemList>
        {data?.posts.map((post) => {
          return (
            <div key={post.id}>
              {post.id}
              <h1>{post.title}</h1>
              <span>{post.body}</span>
            </div>
          );
        })}
      </S.PostItemList>
    </S.Root>
  );
};
