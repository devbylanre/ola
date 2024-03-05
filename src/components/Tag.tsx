import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ComponentProps, ElementType } from 'react';

const tagVariants = cva('w-full', {
  variants: {
    display: {
      block: 'block',
      hidden: 'hidden',
      'inline-block': 'inline-block',
    },

    spaceY: {
      0: 'space-y-0',
      1: 'space-y-1',
      2: 'space-y-2 ',
      3: 'space-y-3',
      4: 'space-y-4',
      5: 'space-y-5',
      6: 'space-y-6',
      7: 'space-y-7',
      8: 'space-y-8',
      9: 'space-y-9',
      10: 'space-y-10',
      12: 'space-y-12',
      16: 'space-y-16',
      20: 'space-y-20',
      24: 'space-y-24',
    },

    spaceX: {
      0: 'space-x-0',
      1: 'space-x-1',
      2: 'space-x-2',
      3: 'space-x-3',
      4: 'space-x-4',
      5: 'space-x-5',
      6: 'space-x-6',
      7: 'space-x-7',
      8: 'space-x-8',
      9: 'space-x-9',
      10: 'space-x-10',
      12: 'space-x-12',
      16: 'space-x-16',
      20: 'space-x-20',
      24: 'space-x-24',
    },
  },
});

type TagOwnProps<TElement extends ElementType> = {
  className?: string;
  as?: TElement;
};

type TagProps<TElement extends ElementType> = TagOwnProps<TElement> &
  Omit<ComponentProps<TElement>, keyof TagOwnProps<TElement>> &
  VariantProps<typeof tagVariants>;

export const Tag = <TElement extends ElementType>(
  props: TagProps<TElement>
) => {
  const { as, className, display, spaceX, spaceY, ...rest } = props;

  const Component = as || 'div';

  return (
    <Component
      className={cn(tagVariants({ display, spaceX, spaceY, className }))}
      {...rest}
    />
  );
};
