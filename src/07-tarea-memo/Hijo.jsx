import React from 'react';
import { Button } from '../components/ui/Button';

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log('  Me volví a generar :(  ');

  return (
    <Button onClick={() => incrementar(numero)} className="animate-scale-in">
      +{numero}
    </Button>
  );
});

Hijo.displayName = 'Hijo';
