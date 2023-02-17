import styled from '@emotion/styled';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import React from 'react';
import { FlexListItem, FlexBoxCreator } from '../layout/FlexBox';

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

export const PostList = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(['posts'], () => getPosts());

  if (isSuccess) {
    return (
      <PostListContainer>
        <StyledPostList>
          {data.posts.map((post) => {
            return <PostListItem key={post.id}>{post.id}</PostListItem>;
          })}
        </StyledPostList>
      </PostListContainer>
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

const PostListContainer = styled(FlexBoxCreator.columnStartFlexBox('section'))`
  display: block;
  width: 1080px;
  min-height: 720px;
  padding: 16px;
  margin: 0 auto;
`;

const StyledPostList = styled(FlexBoxCreator.columnStartFlexBox('ul'))`
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const PostListItem = styled(FlexListItem)`
  min-width: 1000px;
  background-color: #424890;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
  height: 60px;
  flex-wrap: wrap;
`;
