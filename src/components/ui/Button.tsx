import React from 'react';
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider letter-spacing-1';
  const variants = {
    primary:
    'bg-theme-primary text-theme-on-dark hover:bg-theme-secondary border border-transparent hover:border-accent shadow-lg hover:shadow-[0_0_15px_rgba(var(--color-accent),0.2)]',
    outline:
    'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
    ghost:
    'bg-transparent text-theme-secondary hover:text-accent hover:bg-theme-muted',
    link: 'text-accent underline-offset-4 hover:underline p-0 h-auto'
  };
  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-12 px-8 text-sm',
    lg: 'h-14 px-10 text-base'
  };
  return (
    <button
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      style={
      variant === 'primary' ?
      {
        borderColor: 'var(--color-accent)'
      } :
      {}
      }
      {...props}>

      {children}
    </button>);

}