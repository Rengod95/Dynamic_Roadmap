import React, { ButtonHTMLAttributes } from 'react';
import { ButtonColor, ButtonColorPreset, ButtonSize, ButtonSizePreset } from '.';
import * as S from './Button.css';

export type ButtonProps = {
  size: ButtonSizePreset | ButtonSize;
  variant: ButtonColorPreset | ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const DefaultButton = ({ size, variant, children, ...props }: ButtonProps) => {
  return (
    <S.Button flex="columnCenter" size={size} variant={variant} {...props}>
      {children}
    </S.Button>
  );
};
