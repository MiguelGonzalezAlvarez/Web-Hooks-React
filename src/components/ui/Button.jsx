import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantClass =
    variant === 'outline'
      ? 'btn-outline'
      : variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'ghost'
      ? 'btn-ghost'
      : variant === 'danger'
      ? 'btn-danger'
      : variant === 'success'
      ? 'btn-success'
      : 'btn-primary';

  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  return (
    <button className={`btn ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
