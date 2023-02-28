import { css } from '@emotion/react';
import { ButtonSizePreset, ButtonSize, ButtonColorPreset, ButtonColor } from '.';

export const PRESET_BUTTON_SIZES: Record<ButtonSizePreset, ButtonSize> = {
  none: { width: 0, height: 0 },
  small: { width: 100, height: 50 },
  medium: { width: 200, height: 60 },
  large: { width: 300, height: 80 },
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

  console.log(totalColor);

  return css`
    background-color: ${totalColor.default};

    &:hover {
      background-color: ${totalColor.hover};
    }

    &:disabled {
      background-color: ${totalColor.disabled};
    }

    &:active {
      background-color: ${totalColor.active};
      pointer-events: none;
      cursor: default;
    }
  `.styles;
};

export const getButtonSize = (size: ButtonSize | ButtonSizePreset) => {
  let totalSize: ButtonSize;

  if (typeof size === 'string') {
    totalSize = PRESET_BUTTON_SIZES[size];
  } else totalSize = size;

  console.log(totalSize);
  return css`
    width:${totalSize.width}
    height:${totalSize.height}
    margin:${totalSize.margin}
    padding:${totalSize.padding}
    font-size:${totalSize.fontSize}
  `.styles;
};
