import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export const GET_POST_QUERY_KEY = 'post-2';
export const POSTS_ENDPOINT = 'https://dummyjson.com/posts';
export const DEFAULT_POST_ITEM_LIMIT = 10;
export const DEFAULT_POST_ITEM_SKIP = 10;

export type Post = { id: number; body: string; title: string };
export type PostResponse = { posts: Post[]; total: number; limit: number; skip: number };

export const getPostAsync = async (pageParam: number = 1): Promise<PostResponse> => {
  const skipCount = (pageParam - 1) * DEFAULT_POST_ITEM_SKIP;
  const limitCount = pageParam * DEFAULT_POST_ITEM_LIMIT;
  return await fetch(`${POSTS_ENDPOINT}?skip=${skipCount}&limit=${DEFAULT_POST_ITEM_LIMIT}`).then(
    (res) => res.json()
  );
};

export const usePosts = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [maxPageNumber, setMaxPageNumber] = useState<number>(0);

  const { data, error, status } = useQuery<PostResponse, Error>(
    [GET_POST_QUERY_KEY, currentPageNumber],
    () => getPostAsync(currentPageNumber)
  );

  const callNextPage = useCallback(() => {
    setCurrentPageNumber((currentPageNumber) => currentPageNumber + 1);
  }, []);

  const callPreviousPage = useCallback(() => {
    setCurrentPageNumber((currentPageNumber) => currentPageNumber - 1);
  }, []);

  useEffect(() => {
    setMaxPageNumber((data?.total as number) / DEFAULT_POST_ITEM_LIMIT);
  }, [data]);

  return {
    data,
    status,
    error,
    callNextPage,
    callPreviousPage,
    currentPageNumber,
    maxPageNumber,
  };
};
