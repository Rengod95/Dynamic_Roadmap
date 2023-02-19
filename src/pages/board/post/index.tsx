import { PostList } from '@/components/Post/PostList';
import { PostListNav } from '@/components/Post/PostListNav';
import React from 'react';

export interface Post {
  id: number;
}

interface PostPageProps {
  [k: string]: any;
}

const PostPage = ({ dehydratedState, queryClient, ...args }: PostPageProps) => {
  //추후 수정해야 함
  return (
    <div>
      <PostList />
      <PostListNav />
    </div>
  );
};
