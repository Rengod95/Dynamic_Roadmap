import React, { ButtonHTMLAttributes } from 'react';
import {
  ButtonColor,
  ButtonColorPreset,
  ButtonSize,
  ButtonSizePreset,
  getButtonColor,
  getButtonSize,
} from '.';
import { StyledButton } from './Button.css';

export type ButtonProps = {
  size: ButtonSizePreset | ButtonSize;
  variant: ButtonColorPreset | ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ size, variant, onClick, title, disabled, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={size} variant={variant}>
      {title && <span>title</span>}
      {children}
    </StyledButton>
  );
};
