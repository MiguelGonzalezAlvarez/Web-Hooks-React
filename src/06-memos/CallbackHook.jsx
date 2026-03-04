import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import { Card, CardHeader, CardBody } from '../components/ui/Card';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])

    return (
        <Card className="animate-fade-in-up stagger-2" elevated>
            <CardHeader title="useCallback" description="Memoriza funciones" />
            <CardBody>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg">Contador:</span>
                        <span className="badge badge-warning">{counter}</span>
                    </div>
                    
                    <ShowIncrement increment={ incrementFather } />
                </div>
            </CardBody>
        </Card>
    )
}
