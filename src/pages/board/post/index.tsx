import { PostList, getInfinitePost } from '@/components/Post/PostList';
import { PostListNav } from '@/components/Post/PostListNav';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import React from 'react';

type PostPageProps = {
  [k: string]: any;
};

const PostPage = (props: PostPageProps) => {
  return (
    <div>
      <PostList />
      <PostListNav />
    </div>
  );
};

export const DEFAULT_SERVER_SIDE_QUERY_KEY = 'post-pre';

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery([DEFAULT_SERVER_SIDE_QUERY_KEY], ({ pageParam = 1 }) =>
    getInfinitePost(pageParam)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default PostPage;
