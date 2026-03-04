import { useRef } from 'react';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }


  return (
    <Card className="animate-fade-in-up" elevated>
        <CardHeader title="Focus Screen" description="Uso de useRef para manipular el DOM" />
        <CardBody>
            <div className="flex flex-col gap-4">
                <input 
                    ref={ inputRef }
                    type="text" 
                    placeholder="Ingrese su nombre"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--color-border)',
                        fontSize: '16px',
                        outline: 'none'
                    }}
                />

                <Button onClick={ onClick }>
                    Set focus
                </Button>
            </div>
        </CardBody>
    </Card>
  )
}
