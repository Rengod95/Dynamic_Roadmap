import { PostList, PostListNav } from '@/components/Post';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const PostPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <PostList></PostList>
      <PostListNav></PostListNav>
    </div>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = () => {};
