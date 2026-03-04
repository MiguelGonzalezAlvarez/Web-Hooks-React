import React from 'react';
import { Button } from '../components/ui/Button';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log(' Me volví a generar :( ');

  return (
    <Button
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar +5
    </Button>
  );
});

ShowIncrement.displayName = 'ShowIncrement';
