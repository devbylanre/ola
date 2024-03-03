import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';

const textVariants = cva('tracking-normal', {
  variants: {
    size: {
      10: 'text-[1rem]',
      12: 'text-[1.2rem]',
      13: 'text-[1.3rem]',
      14: 'text-[1.4rem]',
      16: 'text-[1.6rem]',
      18: 'text-[1.6rem] md:text-[1.8rem]',
      20: 'text-[1.8rem] md:text-[2rem]',
      24: 'text-[2rem] md:text-[2.4rem]',
      28: 'text-[2.4rem] md:text-[2.8rem]',
      32: 'text-[3.2rem]',
      40: 'text-[3.2rem] md:text-[4rem]',
      48: 'text-[4rem] md:text-[4.8rem]',
      56: 'text-[4rem] md:[text-[4.8rem] lg:text-[5.6rem]',
      64: 'text-[4.8rem] md:text-[4.8rem] lg:text-[6.4rem]',
      80: 'text-[4.8rem] md:text-[5.6rem] lg:text-[8rem]',
      120: 'text-[5.6rem md:text-[8rem] lg:text-[12rem]',
    },

    color: {
      'red-light': 'text-red-light',
      'red-dark': 'text-red-dark',
      'gray-light': 'text-gray-light',
      'gray-dark': 'text-gray-dark',
      'gray-light-accessible': 'text-gray-light-accessible',
      'gray-dark-accessible': 'text-gray-dark-accessible',
    },

    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },

    align: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
    },
  },

  defaultVariants: {
    weight: 500,
    color: 'gray-dark',
    size: 16,
  },
});

type TextOwnProps<TElement extends ElementType> = {
  className?: string;
  as?: TElement;
};

type TextProps<TElement extends ElementType> = TextOwnProps<TElement> &
  Omit<ComponentProps<TElement>, keyof TextOwnProps<TElement>> &
  VariantProps<typeof textVariants>;

export const Text = <TElement extends ElementType>(
  props: TextProps<TElement>
) => {
  const { as, className, weight, color, size, align, ...rest } = props;

  const Component = as || 'p';

  return (
    <Component
      className={cn(textVariants({ weight, color, size, align, className }))}
      {...rest}
    />
  );
};
