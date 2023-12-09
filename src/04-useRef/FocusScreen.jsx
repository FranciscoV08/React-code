import { useRef } from "react"

export const FocusScreen = () => {

    // useRef

    const inputRef = useRef();
    // console.log(ref)
    const onClick = () =>{
        
        inputRef.current.select();

        // document.querySelector('input').select();

    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            ref={inputRef}
            className="form-control"
            type="text"
            placeholder="Ingrese su nombre"

         />

                 <input 
            className="form-control"
            type="text"
            placeholder="Ingrese su nombre"

         />

         <button 
            onClick={ onClick }
            className="btn btn-primary mt2">
            Set Focus
         </button>
    </>
  )
}
