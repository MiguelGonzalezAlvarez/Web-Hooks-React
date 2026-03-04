import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies elevated class when elevated prop is true', () => {
    render(<Card elevated>Elevated card</Card>);
    const card = screen.getByText('Elevated card');
    expect(card).toHaveClass('card-elevated');
  });

  it('renders CardHeader with title', () => {
    render(
      <Card>
        <CardHeader title="Test Title">Header content</CardHeader>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders CardHeader with description', () => {
    render(
      <Card>
        <CardHeader title="Title" description="Test Description" />
      </Card>
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders CardBody correctly', () => {
    render(
      <Card>
        <CardBody>Body content</CardBody>
      </Card>
    );
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('renders CardFooter correctly', () => {
    render(
      <Card>
        <CardFooter>Footer content</CardFooter>
      </Card>
    );
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>);
    const card = screen.getByText('Custom');
    expect(card).toHaveClass('custom-class');
  });
});
