import { useCounter } from '../hooks/useCounter';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <Card className="animate-fade-in-up stagger-1" elevated>
            <CardHeader title="Contador con Hook Personalizado" description="Custom hook useCounter" />
            <CardBody>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Valor: {counter}</span>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => increment(2)}>+1</Button>
                    <Button variant="outline" onClick={reset}>Reset</Button>
                    <Button variant="secondary" onClick={() => decrement(2)}>-1</Button>
                </div>
            </CardBody>
        </Card>
    )
}
