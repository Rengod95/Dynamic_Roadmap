//preset type for user
export type ButtonSizePreset = 'none' | 'small' | 'medium' | 'large';

export type ButtonColorPreset =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'transparent';

//state for color
export type ButtonState = 'default' | 'active' | 'disabled' | 'hover';

//size type
export interface ButtonSize {
  width: number;
  height: number;
  padding?: number;
  margin?: number;
  fontSize?: string;
}

//color type
export type Color = string;
export type ButtonColor = Record<ButtonState, Color>;
