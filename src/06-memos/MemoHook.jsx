import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...');
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <Card className="animate-fade-in-up stagger-1" elevated>
            <CardHeader title="useMemo" description="Memoriza valores calculados" />
            <CardBody>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span>Contador:</span>
                        <span className="badge">{counter}</span>
                    </div>
                    
                    <p className="text-muted text-sm">{memorizedValue}</p>
                    
                    <div className="flex gap-2">
                        <Button onClick={() => increment()}>
                            +1
                        </Button>
                        <Button 
                            variant="outline" 
                            onClick={() => setShow(!show)}
                        >
                            {show ? 'Ocultar' : 'Mostrar'} ({JSON.stringify(show)})
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
