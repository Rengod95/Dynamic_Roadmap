import { css } from '@emotion/react';
import {
  ButtonColor,
  ButtonColorPreset,
  ButtonSize,
  ButtonSizePreset,
  PRESET_BUTTON_COLORS,
  PRESET_BUTTON_SIZES,
} from '.';

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
