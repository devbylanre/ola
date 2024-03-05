import React, { forwardRef } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

type IconProps = IconBaseProps & {
  element: IconType;
};

export const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
  const { element, ...rest } = props;

  const Component = element;

  return <Component {...rest} />;
});
