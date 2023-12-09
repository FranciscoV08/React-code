import { useCounter, useFetch} from "../Hooks";
import { Quote, LoadingQuote} from './index'

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    //Negamos !! 2 veces para que de false ( Doble negacion )
    const {author, quote} = !!data && data[0];

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
            (isLoading)
                ? (
                    <LoadingQuote />
                ) 
                : (
                    <Quote
                         author={author}
                         quote={quote}
                    />
                )
        }

        <button 
        disabled={isLoading}
        className="btn btn-primary" 
        onClick={() => increment()}>
            Next quote 
        </button>
    </>



  )
}
