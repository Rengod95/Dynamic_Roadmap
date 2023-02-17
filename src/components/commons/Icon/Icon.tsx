import React, { SVGAttributes, useMemo } from 'react';
import {
  IconName,
  ViewBoxSize,
  ViewPortSize,
  getIconData,
  setViewBoxSize,
  setViewPortSize,
} from '.';
import styled from '@emotion/styled';

export interface IconProps {
  iconName: IconName;
  size?: ViewPortSize;
  viewBoxSize?: ViewBoxSize;
  color?: string;
}

const SVGIcon = ({ size, viewBoxSize, iconName, color, ...args }: IconProps) => {
  //viewPortSize
  const {
    minX,
    minY,
    width: viewboxWidth,
    height: viewboxHeight,
  } = useMemo(() => setViewBoxSize(viewBoxSize, iconName), [viewBoxSize, iconName]);
  //viewBoxSize
  const { width: iconWidth, height: iconHeight } = useMemo(() => setViewPortSize(size), [size]);
  // path to be drawn
  const icon_data = useMemo(() => getIconData(iconName), [iconName]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      fill="none"
      viewBox={`${minX} ${minY} ${viewboxWidth} ${viewboxHeight}`}>
      <path fill={color} d={icon_data.path} {...icon_data}></path>
    </svg>
  );
};

export default SVGIcon;
