import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    return (
        <Card className="animate-fade-in-up" elevated>
            <CardHeader title="useLayoutEffect" description="Midiendo tamaños de elementos" />
            <CardBody>
                {
                    isLoading
                     ? <LoadingQuote />
                     : <Quote author={ author } quote={ quote } />
                }
            </CardBody>
            <CardFooter>
                <Button 
                    disabled={ isLoading }
                    onClick={ () => increment() }>
                    Next quote
                </Button>
            </CardFooter>
        </Card>
    )
}
