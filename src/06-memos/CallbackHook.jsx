import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(
        // Aqui recibe los argumentos 
      (number) => {
           
         setCounter( (value) => value + number );
      },
      [],
    )
    


    // const increment = () => {
    //     setCounter(counter + 1);
    // }
        
  return (
    <>
        <h1>CallbackHook: {counter} </h1>
        <hr />

        <ShowIncrement 
            increment={increment }
         />
    </>
  )
}
