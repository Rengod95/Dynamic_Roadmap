import { GET_POST_QUERY_KEY, PostList, getPostAsync, usePosts } from '@/components/Post/PostList';
import { PostListNav } from '@/components/Post/PostListNav';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import React from 'react';

type PostPageProps = {
  [k: string]: any;
};

const PostPage = (props: PostPageProps) => {
  const { data, error, status, callNextPage, callPreviousPage, currentPageNumber, maxPageNumber } =
    usePosts();
  return (
    <div>
      {status === 'error' ? (
        <div>{error?.message}</div>
      ) : status === 'loading' ? (
        <div>...Loading Datas</div>
      ) : (
        <PostList data={data} />
      )}
      <PostListNav
        current={currentPageNumber}
        max={maxPageNumber}
        handler={{ callNextPage, callPreviousPage }}
      />
    </div>
  );
};

export const DEFAULT_SERVER_SIDE_QUERY_KEY = 'post';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([DEFAULT_SERVER_SIDE_QUERY_KEY], ({ pageParam = 0 }) =>
    getPostAsync(pageParam)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default PostPage;
