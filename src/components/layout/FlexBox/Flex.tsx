import React from 'react';
import { PolymorphicProps } from '@/types/type.props';
import styled from '@emotion/styled';
import { CustomFlexStyleConfig, FlexVariant, StyleController } from '.';

export type FlexProps = { variant: FlexVariant; custom: CustomFlexStyleConfig };

export type Props<C extends React.ElementType> = PolymorphicProps<C, FlexProps>;

export const FlexBase = <C extends React.ElementType = 'div'>({
  as,
  children,
  variant,
  custom,
  ...props
}: Props<C>) => {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
};

export const Flex = styled(FlexBase)(({ variant, custom }) => {
  const style = StyleController(variant, custom);
  return `
    ${style}
  `;
});
