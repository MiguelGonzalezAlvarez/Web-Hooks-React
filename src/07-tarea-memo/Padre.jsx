import { useCallback, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Hijo } from './Hijo';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValor( (oldValue) => oldValue + num )
        },
      [],
    );
       
    const reset = useCallback(() => {
        setValor(0);
    }, []);

    return (
        <Card className="animate-fade-in-up" elevated>
            <CardHeader 
                title="Comunicación Padre-Hijo" 
                description="Usa React.memo y useCallback para evitar re-renders innecesarios"
            />
            <CardBody>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg">Total acumulado:</span>
                    <span className="badge badge-success">{valor}</span>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                    {numeros.map( n => (
                        <Hijo 
                            key={ n }
                            numero={ n }
                            incrementar={ incrementar }
                        />
                    ))}
                </div>
            </CardBody>
            <CardFooter>
                <Button variant="outline" size="sm" onClick={reset}>
                    Reset
                </Button>
            </CardFooter>
        </Card>
    )
}
