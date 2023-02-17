import { ButtonSizePreset, ButtonSize, ButtonColor, ButtonColorPreset } from '.';

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
