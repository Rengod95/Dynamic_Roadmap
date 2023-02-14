import React, { LiHTMLAttributes, ReactNode } from 'react';
import createFlexBox from './FlexBoxCreator';
import styled from '@emotion/styled';
import { log } from 'console';

export interface FlexListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

export const FlexListItem = ({ children, ...args }: FlexListItemProps) => {
  console.log(args);

  return <FlexLi {...args}>{children}</FlexLi>;
};

const FlexLi = createFlexBox('li');
