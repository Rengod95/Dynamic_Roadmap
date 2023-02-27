import { css } from '@emotion/react';
import { ButtonSizePreset, ButtonSize, ButtonColorPreset, ButtonColor, ButtonProps } from '.';

export const PRESET_BUTTON_SIZES: Record<ButtonSizePreset, ButtonSize> = {
  none: { width: 0, height: 0, margin: 0, padding: 0, fontSize: '14px' },
  small: { width: 100, height: 50, margin: 0, padding: 0, fontSize: '14px' },
  medium: { width: 200, height: 60, margin: 0, padding: 0, fontSize: '14px' },
  large: { width: 300, height: 80, margin: 0, padding: 0, fontSize: '14px' },
};

export const PRESET_BUTTON_COLORS: Record<ButtonColorPreset, ButtonColor> = {
  default: { default: '#554499', active: '#FFF234', hover: '#FF2144', disabled: '#004450' },
  primary: { default: '#554499', active: '#FFF234', hover: '#FF2144', disabled: '#004450' },
  success: { default: '#554499', active: '#FFF234', hover: '#FF2144', disabled: '#004450' },
  warning: { default: '#554499', active: '#FFF234', hover: '#FF2144', disabled: '#004450' },
  error: { default: '#554499', active: '#FFF234', hover: '#FF2144', disabled: '#004450' },
  transparent: {
    default: 'transparent',
    active: 'transparent',
    hover: 'transparent',
    disabled: 'transparent',
  },
};

export const DEFAULT_BUTTON_COLOR: ButtonColor = {
  default: '#554499',
  active: '#FFF234',
  hover: '#FF2144',
  disabled: '#004450',
};

export const getButtonColor = (color: ButtonColor | ButtonColorPreset) => {
  let totalColor: ButtonColor;

  if (typeof color === 'string') {
    totalColor = PRESET_BUTTON_COLORS[color];
  } else totalColor = color;

  return css`
    background-color: ${totalColor?.default};

    &:hover {
      background-color: ${totalColor?.hover};
    }

    &:disabled {
      background-color: ${totalColor?.disabled};
      pointer-events: none;
    }

    &:active {
      background-color: ${totalColor?.active};
      cursor: default;
    }
  `.styles;
};

export const getButtonSize = (size: ButtonSize | ButtonSizePreset) => {
  let totalSize: ButtonSize;

  if (typeof size === 'string') {
    totalSize = PRESET_BUTTON_SIZES[size];
  } else totalSize = size;

  return css`
    width: ${totalSize?.width + 'px'};
    height: ${totalSize?.height + 'px'};
    margin: ${totalSize?.margin + 'px'};
    padding: ${totalSize?.padding + 'px'};
    font-size: ${totalSize?.fontSize};
  `.styles;
};
