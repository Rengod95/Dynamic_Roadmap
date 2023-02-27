import * as S from './PostListNav.css';
import { SVGIcon } from '@/components/commons/Icon';
import { DefaultButton } from '@/components/commons/Button';
import { usePostListNav } from './PostListNav.hooks';

type PostListNavProps = {
  current: number;
  max: number;
  handler: {
    callPreviousPage: () => void;
    callNextPage: () => void;
  };
  [k: string]: any;
};

export const PostListNav = ({ current, max, handler }: PostListNavProps) => {
  const { prevButtonDisabled, nextButtonDisabled } = usePostListNav(current, max);

  return (
    <S.Root>
      <S.NavBody flex="rowStart">
        <S.ItemList flex="rowCenter">
          <DefaultButton
            size={'medium'}
            variant={'transparent'}
            onClick={handler.callPreviousPage}
            disabled={prevButtonDisabled}>
            <SVGIcon iconName={'arrowLeft'} size={40} color={'black'} />
          </DefaultButton>
          <span>현재 페이지: {current}</span>
          <DefaultButton
            size={'medium'}
            variant={'transparent'}
            onClick={handler.callNextPage}
            disabled={nextButtonDisabled}>
            <SVGIcon iconName={'arrowRight'} size={40} color={'black'} />
          </DefaultButton>
        </S.ItemList>
      </S.NavBody>
    </S.Root>
  );
};
