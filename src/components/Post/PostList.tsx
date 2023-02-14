import {
  QueryClient,
  QueryFunction,
  dehydrate,
  useHydrate,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';

export const PostList = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(['posts'], () => getPosts());

  if (isSuccess) {
    return (
      <div>
        {data.posts.map((post) => {
          return <span key={post.id}>{post.id}</span>;
        })}
      </div>
    );
  }
  console.log(data);
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps<PostListProps> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts'], () => getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getPosts = async (offset: number = 0): Promise<Posts> => {
  return await fetch(`https://dummyjson.com/posts`).then((res) => res.json());
};

type PostListProps = {
  dehydratedState: ReturnType<typeof dehydrate>;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
};

type Posts = { posts: Post[] };
