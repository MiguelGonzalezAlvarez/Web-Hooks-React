import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    return (
        <Card className="animate-fade-in-up" elevated>
            <CardHeader title="useMemo" description="Evita cálculos costosos en cada render" />
            <CardBody>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg">Contador:</span>
                        <Small value={counter} />
                    </div>
                    
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
