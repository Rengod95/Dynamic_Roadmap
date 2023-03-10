import React, { useState } from 'react';
import { Root, PostListItem, PostItemList, getPostAsync, useInfinitePost } from '.';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { GET_POST_QUERY_KEY } from '.';

export type PostListProps = {
  [k: string]: any;
};

export const PostList = (props: PostListProps) => {
  const [postListId, setpostListId] = useState<number>(0);

  const { isLoading, isError, data, error } = useInfinitePost(postListId);

  // const {} = data;

  return (
    <Root>
      <PostItemList>
        {isLoading && <p>Loading user data...</p>}
        {isError && <p>Error fetching user data: {error?.message && '에러'}</p>}
        {data && <div>data</div>}
      </PostItemList>
    </Root>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const initialData = await queryClient.prefetchInfiniteQuery(
    [GET_POST_QUERY_KEY],
    ({ pageParam = 0 }) => getPostAsync(pageParam)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
