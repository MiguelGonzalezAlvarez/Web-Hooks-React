import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    return (
        <Card className="animate-fade-in-up" elevated>
            <CardHeader title="BreakingBad Quotes" description="Custom hooks useFetch + useCounter" />
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
