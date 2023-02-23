import styled from '@emotion/styled';

export const Root = styled('ul')`
  min-height: 0;

  > li {
    list-style: none;
  }
  > li + li {
    margin-top: 10px;
  }
`;
