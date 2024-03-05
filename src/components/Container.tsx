import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, ElementType } from 'react';

const containerVariants = cva('mx-auto px-3 lg:px-0', {
  variants: {
    span: {
      none: 'w-full',
      sm: 'w-[640px]',
      md: 'max-w-[768px]',
      lg: 'max-w-[992px]',
      xl: 'max-w-[1200px]',
    },
  },

  defaultVariants: {
    span: 'none',
  },
});

type ContainerOwnProps<TElement extends ElementType> = {
  className?: string;
  as?: TElement;
};

type ContainerProps<TElement extends ElementType> =
  ContainerOwnProps<TElement> &
    Omit<ComponentProps<TElement>, keyof ContainerOwnProps<TElement>> &
    VariantProps<typeof containerVariants>;

export const Container = <TElement extends ElementType>(
  props: ContainerProps<TElement>
) => {
  const { as, className, span, ...rest } = props;

  const Component = as || 'div';

  return (
    <Component
      className={cn(containerVariants({ span, className }))}
      {...rest}
    />
  );
};
