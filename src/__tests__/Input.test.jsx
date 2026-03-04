import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../components/ui/Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with value', () => {
    render(<Input value="Test value" />);
    const input = screen.getByDisplayValue('Test value');
    expect(input).toBeInTheDocument();
  });

  it('applies error class when error prop is true', () => {
    render(<Input error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-error');
  });

  it('renders small size correctly', () => {
    render(<Input size="sm" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-sm');
  });

  it('renders large size correctly', () => {
    render(<Input size="lg" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('input-lg');
  });

  it('handles onChange', () => {
    let value = '';
    const handleChange = (e) => {
      value = e.target.value;
    };
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(value).toBe('new value');
  });

  it('applies custom className', () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
  });

  it('accepts different types', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});
