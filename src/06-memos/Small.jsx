import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log(' Me volví a dibujar :( ');

  return (
    <small className="text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>
      {value}
    </small>
  );
});

Small.displayName = 'Small';
