import React, { ButtonHTMLAttributes, ReactNode, useCallback, useState } from 'react';
import { FlexBoxCreator } from '../../layout/FlexBox';
import styled from '@emotion/styled';
import {
  ButtonColor,
  ButtonColorPreset,
  ButtonSize,
  ButtonSizePreset,
  getButtonColor,
  getButtonSize,
} from '.';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSizePreset | ButtonSize;
  variant: ButtonColorPreset | ButtonColor;
  onClick?: (...args: any) => any;
  title?: string | undefined;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = ({ size, variant, onClick, title, disabled, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={size} variant={variant}>
      {title && <span>title</span>}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(FlexBoxCreator.createDefaultFlexBox('button'))`
  ${({ size, variant }: ButtonProps) => {
    const colorStyle = getButtonColor(variant);
    const sizeStyle = getButtonSize(size);

    return `
    ${colorStyle}
    ${sizeStyle}
  `;
  }}
`;

export default Button;
