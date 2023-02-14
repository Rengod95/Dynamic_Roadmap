import { ReactNode } from 'react';
import styled from '@emotion/styled';

type mainAxisDirection = 'row' | 'column';
type useOneLine = 'nowrap' | 'wrap';
type mainAxisItemPos = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type subAxisItemPosOneline =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
type subAxisItemPos = 'flex-start' | 'center' | 'flex-end' | 'stretch';

const DEFAULT_MAIN_AXIS_DIRECTION = 'row';
const DEFAULT_USE_ONE_LINE = 'no-wrap';
const DEFAULT_MAIN_AXIS_ITEM_POS = 'center';
const DEFAULT_SUB_AXIS_ITEM_POS_ONE_LINE = 'center';
const DEFAULT_SUB_AXIS_ITEM_POS = 'stretch';

export const createFlexBox = (
  element: any,
  mainAxisDirection?: mainAxisDirection,
  useOneLine?: useOneLine,
  mainAxisItemPos?: mainAxisItemPos,
  subAxisItemPos?: subAxisItemPos,
  subAxisItemPosOneline?: subAxisItemPosOneline
) => {
  return styled(element)`
    ${(props) => {
      return `
        display:flex;
        flex-direction:${mainAxisDirection ?? DEFAULT_MAIN_AXIS_DIRECTION};
        flex-wrap:${useOneLine ?? DEFAULT_USE_ONE_LINE};
        justify-content:${mainAxisItemPos ?? DEFAULT_MAIN_AXIS_ITEM_POS};
        align-content:${subAxisItemPos ?? DEFAULT_SUB_AXIS_ITEM_POS};
        align-items:${subAxisItemPosOneline ?? DEFAULT_SUB_AXIS_ITEM_POS_ONE_LINE};
      `;
    }}
  `;
};

export default createFlexBox;
