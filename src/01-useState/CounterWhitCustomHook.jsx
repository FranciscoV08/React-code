import { useCounter } from "../Hooks/useCounter"

export const CounterWhitCustomHook = () => {
    
    // MI CUSTOM HOOKS
    // Extraigo un obj por que en el useCounter retorno un obj
    // El estado lo tiene nuestro CustomHook, y como tal contendra las 
        // funciones para incrementar decrementar y reset 
    const { counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>CounterWhitCustomHook : {counter}</h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={ () => increment(2)}

        >+1</button>

        <button 
            className="btn btn-primary"
            onClick={reset}
            >reset</button>

        <button
            className="btn btn-primary"
            onClick={() => decrement(2)}
        >-1</button>
    </>


  )
}
