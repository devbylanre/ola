import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const separatorVariants = cva('', {
  variants: {
    axis: {
      x: 'w-full border-t border-t-gray-light-accessible',
      y: 'border-l border-l-gray-light',
    },

    spaceY: {
      0: 'my-0',
      1: 'my-1',
      2: 'my-2',
      3: 'my-3',
      4: 'my-4',
      5: 'my-5',
      6: 'my-6',
      7: 'my-7',
      8: 'my-8',
      9: 'my-9',
      10: 'my-10',
      12: 'my-12',
      16: 'my-16',
      20: 'my-20',
      24: 'my-24',
      32: 'my-32',
    },

    spaceX: {
      0: 'mx-0',
      1: 'mx-1',
      2: 'mx-2',
      3: 'mx-3',
      4: 'mx-4',
      5: 'mx-5',
      6: 'mx-6',
      7: 'mx-7',
      8: 'mx-8',
      9: 'mx-9',
      10: 'mx-10',
      12: 'mx-12',
      16: 'mx-16',
      20: 'mx-20',
      24: 'mx-24',
      32: 'mx-32',
    },
  },

  defaultVariants: {
    axis: 'x',
    spaceY: 24,
  },
});

type SeparatorProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof separatorVariants>;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (props, ref) => {
    const { className, axis, spaceY, spaceX, ...rest } = props;

    return (
      <div
        ref={ref}
        className={cn(separatorVariants({ axis, spaceX, spaceY, className }))}
        {...rest}
      />
    );
  }
);
