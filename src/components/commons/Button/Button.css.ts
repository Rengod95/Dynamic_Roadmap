import { FlexBoxCreator } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { ButtonProps, getButtonColor, getButtonSize } from '.';

export const Button = styled(FlexBoxCreator.createDefaultFlexBox('button'), {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'variant' && prop !== 'size',
})<ButtonProps>({}, ({ variant, size }) => {
  const colorStyle = getButtonColor(variant);
  const sizeStyle = getButtonSize(size);

  return `
    ${colorStyle}
    ${sizeStyle}
  `;
});
