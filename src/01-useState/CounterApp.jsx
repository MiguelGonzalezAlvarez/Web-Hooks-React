import { useState } from 'react';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

  return (
    <Card className="animate-fade-in-up" elevated>
      <CardHeader title="Contador Múltiple" description="Estado con múltiples contadores" />
      <CardBody>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span>Counter 1:</span>
            <span className="text-lg font-semibold">{counter1}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Counter 2:</span>
            <span className="text-lg font-semibold">{counter2}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Counter 3:</span>
            <span className="text-lg font-semibold">{counter3}</span>
          </div>
        </div>

        <hr className="my-4" style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />

        <Button 
            onClick={() => setCounter({
                ...state,
                counter1: counter1 + 1,
            })}
        >
          +1
        </Button>
    
      </CardBody>
    </Card>
  )
}
