import { useInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';

export const GET_POST_QUERY_KEY = 'post';
export const POSTS_ENDPOINT = 'https://dummyjson.com/posts';
export const DEFAULT_POST_ITEM_LIMIT = 10;
export const DEFAULT_POST_ITEM_SKIP = 10;
export const FIRST_PAGE_PARAM = 1;

export type Post = { id: number; body: string; title: string };
export type PostResponse = {
  posts: Post[];
  total: number;
  limit: number;
  skip: number;
  pageParam: number;
};

export const getInfinitePost = async (pageParam: number): Promise<PostResponse> => {
  const skipCount = (pageParam - 1) * DEFAULT_POST_ITEM_SKIP;

  const queryString = qs.stringify({
    skip: skipCount,
    limit: DEFAULT_POST_ITEM_LIMIT,
  });

  const data = await fetch(`${POSTS_ENDPOINT}?${queryString}`).then((res) => res.json());

  return { ...data, pageParam };
};

export const useInfinitePosts = () => {
  const query = useInfiniteQuery<PostResponse, Error>({
    queryKey: [GET_POST_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) => getInfinitePost(pageParam),
    getNextPageParam: (last) => {
      return last?.pageParam < last?.total / DEFAULT_POST_ITEM_LIMIT
        ? last.pageParam + 1
        : undefined;
    },
  });

  return query;
};
