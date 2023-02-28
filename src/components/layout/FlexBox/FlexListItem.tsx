import React, { LiHTMLAttributes } from 'react';
import FlexBoxCreator from './Flex.util';

export interface FlexListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

export const FlexListItem = ({ children, ...args }: FlexListItemProps) => {
  return <FlexLi {...args}>{children}</FlexLi>;
};

const FlexLi = FlexBoxCreator.createDefaultFlexBox('li');
