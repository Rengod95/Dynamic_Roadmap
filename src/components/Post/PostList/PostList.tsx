import { PostResponse } from '.';
import * as S from './PostList.css';

export type PostListProps = {
  data: PostResponse | undefined;
};

export const PostList = ({ data }: PostListProps) => {
  return (
    <S.Root flex="columnCenter">
      <S.PostItemList flex="columnStart">
        {data?.posts.map((post) => {
          return (
            <div key={post.id}>
              {post.id}
              <h1>{post.title}</h1>
              <span>{post.body}</span>
            </div>
          );
        })}
      </S.PostItemList>
    </S.Root>
  );
};
