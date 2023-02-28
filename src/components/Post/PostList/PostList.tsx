import { PostResponse, useInfinitePosts } from '.';
import * as S from './PostList.css';

export type PostListProps = {};

export const PostList = () => {
  const query = useInfinitePosts();

  return (
    <S.Root>
      <S.PostItemList>
        {query.isLoading ? (
          <div>is loading...</div>
        ) : query.isError ? (
          <div>error was caught!</div>
        ) : (
          query.data.pages.map((page) => {
            return page.posts.map((page) => {
              return (
                <div key={page.id}>
                  <h2>{page.id}</h2>
                  <h3>{page.title}</h3>
                  <div>{page.body}</div>
                </div>
              );
            });
          })
        )}
      </S.PostItemList>
    </S.Root>
  );
};
