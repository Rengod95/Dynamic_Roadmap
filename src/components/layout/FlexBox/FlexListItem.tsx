import React, { LiHTMLAttributes } from 'react';
import FlexBoxCreator from './flex.util';
import styled from '@emotion/styled';
import { log } from 'console';

export interface FlexListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

export const FlexListItem = ({ children, ...args }: FlexListItemProps) => {
  // console.log(args);

  return <FlexLi {...args}>{children}</FlexLi>;
};

const FlexLi = FlexBoxCreator.createDefaultFlexBox('li');
