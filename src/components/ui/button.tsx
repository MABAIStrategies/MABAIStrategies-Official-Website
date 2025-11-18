import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-brand-accent text-slate-900 hover:bg-teal-200 focus-visible:outline-brand-accent',
        secondary: 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    href?: string;
    children: ReactNode;
  };

export function Button({ href, children, className, variant, size, ...props }: ButtonProps) {
  const classes = clsx(buttonStyles({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
