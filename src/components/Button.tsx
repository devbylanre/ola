import cn from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'px-5 text-[1.7rem] tracking-tight mx-auto font-medium flex gap-x-2 items-center justify-content-center transition-all ease-in-out duration-300',
  {
    variants: {
      variant: {
        solid: 'bg-orange-300 text-white hover:bg-orange-200',
        outline: '',
        ghost: '',
      },

      rounded: {
        normal: 'rounded-lg',
        full: '',
      },

      span: {
        fit: 'w-fit',
        full: 'w-full',
      },

      size: {
        xs: 'h-12',
        sm: 'h-14',
        md: 'h-16',
        lg: 'h-20',
        xl: 'h-24',
      },
    },

    defaultVariants: {
      variant: 'solid',
      size: 'md',
      rounded: 'normal',
      span: 'fit',
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, size, rounded, variant, ...rest } = props;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...rest}
      />
    );
  }
);
