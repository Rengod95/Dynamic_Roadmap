import React, { ButtonHTMLAttributes } from 'react';
import {
  ButtonColor,
  ButtonColorPreset,
  ButtonSize,
  ButtonSizePreset,
  getButtonColor,
  getButtonSize,
} from '.';
import * as S from './Button.css';

export type ButtonProps = {
  size: ButtonSizePreset | ButtonSize;
  variant: ButtonColorPreset | ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ size, variant, children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
