import React from 'react';
import './Input.css';

export const Input = ({ children, className = '', error = false, size = 'md', ...props }) => {
  const sizeClass = size === 'sm' ? 'input-sm' : size === 'lg' ? 'input-lg' : '';

  const errorClass = error ? 'input-error' : '';

  return (
    <input className={`input ${sizeClass} ${errorClass} ${className}`} {...props}>
      {children}
    </input>
  );
};
