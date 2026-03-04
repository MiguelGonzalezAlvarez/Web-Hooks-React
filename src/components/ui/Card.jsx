import React from 'react';
import './Card.css';

export const Card = ({ children, className = '', elevated = false, ...props }) => {
  return (
    <div className={`card ${elevated ? 'card-elevated' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', title, description }) => {
  return (
    <div className={`card-header ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '' }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = '' }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};
