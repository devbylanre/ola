import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';

const gridVariants = cva('grid', {
  variants: {
    place: {
      start: 'place-content-start',
      center: 'place-content-center',
      end: 'place-content-end',
      evenly: 'place-content-evenly',
      around: 'place-content-around',
      stretch: 'place-content-stretch',
      baseline: 'place-content-baseline',
    },

    content: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      evenly: 'content-evenly',
      around: 'content-around',
      between: 'content-between',
      baseline: 'content-baseline',
      stretch: 'content-stretch',
    },

    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      evenly: 'justify-evenly',
      around: 'justify-around',
      between: 'justify-between',
      stretch: 'justify-stretch',
    },

    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-8',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },

    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-8',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
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

type GridOwnProps<TElement extends ElementType> = {
  className?: string;
  as?: TElement;
};

type GridProps<TElement extends ElementType> = GridOwnProps<TElement> &
  Omit<ComponentProps<TElement>, keyof GridOwnProps<TElement>> &
  VariantProps<typeof gridVariants>;

export const Grid = <TElement extends ElementType>(
  props: GridProps<TElement>
) => {
  const {
    as,
    className,
    cols,
    rows,
    content,
    justify,
    gap,
    gapX,
    gapY,
    place,
    ...rest
  } = props;

  const Component = as || 'div';

  return (
    <Component
      className={cn(
        gridVariants({ cols, rows, place, content, justify, gap, gapX, gapY })
      )}
      {...rest}
    />
  );
};
