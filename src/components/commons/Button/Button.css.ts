import { FlexBoxCreator } from '@/components/layout/FlexBox';
import styled from '@emotion/styled';
import { ButtonProps, getButtonColor, getButtonSize } from '.';

export const Button = styled(FlexBoxCreator.createDefaultFlexBox('button'))`
  ${({ size, variant }: ButtonProps) => {
    const colorStyle = getButtonColor(variant);
    const sizeStyle = getButtonSize(size);

    return `
    ${colorStyle}
    ${sizeStyle}
  `;
  }}
`;
