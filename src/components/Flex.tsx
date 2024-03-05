import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, ElementType } from 'react';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
    },

    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
    },

    items: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },

    content: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      between: 'content-between',
      around: 'content-around',
      stretch: 'content-stretch',
    },

    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },

    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      12: 'gap-12',
      16: 'gap-16',
      20: 'gap-20',
    },

    gapX: {
      1: 'gap-x-1',
      2: 'gap-x-2',
      3: 'gap-x-3',
      4: 'gap-x-4',
      5: 'gap-x-5',
      6: 'gap-x-6',
      7: 'gap-x-7',
      8: 'gap-x-8',
      9: 'gap-x-9',
      10: 'gap-x-10',
      12: 'gap-x-12',
      16: 'gap-x-16',
      20: 'gap-x-20',
    },

    gapY: {
      1: 'gap-y-1',
      2: 'gap-y-2',
      3: 'gap-y-3',
      4: 'gap-y-4',
      5: 'gap-y-5',
      6: 'gap-y-6',
      7: 'gap-y-7',
      8: 'gap-y-8',
      9: 'gap-y-9',
      10: 'gap-y-10',
      12: 'gap-y-12',
      16: 'gap-y-16',
      20: 'gap-y-20',
    },
  },
});

type FlexOwnProps<TElement extends ElementType> = {
  className?: string;
  as?: TElement;
};

type FlexProps<TElement extends ElementType> = FlexOwnProps<TElement> &
  Omit<ComponentProps<TElement>, keyof FlexOwnProps<TElement>> &
  VariantProps<typeof flexVariants>;

export const Flex = <TElement extends ElementType>(
  props: FlexProps<TElement>
) => {
  const {
    as,
    className,
    direction,
    wrap,
    content,
    items,
    justify,
    gap,
    gapX,
    gapY,
    ...rest
  } = props;

  const Component = as || 'div';

  return (
    <Component
      className={cn(
        flexVariants({
          direction,
          wrap,
          items,
          content,
          justify,
          gap,
          gapX,
          gapY,
          className,
        })
      )}
      {...rest}
    />
  );
};
