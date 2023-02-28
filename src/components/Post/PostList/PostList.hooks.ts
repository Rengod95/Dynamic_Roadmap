import { GetNextPageParamFunction, useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

export type PostResponse = {} & Promise<any>;

export const GET_POST_QUERY_KEY = 'post';
export const GET_POST_ENDPOINT = 'https://dummyjson.com/posts/';

export const getPostAsync = async (offset: number = 0): Promise<any> => {
  return await fetch(GET_POST_ENDPOINT + offset).then((res) => res.json());
};

export const useInfinitePost = (id: number) => {
  const getPostAsync = React.useCallback(() => getPostAsync, []);

  const { data, isSuccess, isError, isFetching, isLoading, error } = useInfiniteQuery<any, Error>(
    [GET_POST_QUERY_KEY],
    (param) => getPostAsync(),
    {
      getNextPageParam: (lastPage, allPages) => {},
    }
  );

  return {
    data,
    isSuccess,
    isError,
    isFetching,
    isLoading,
    error,
  };
};
