// useForm (use por que es un Hook y despues el nombre de nuestro Custom Hook)

import { useState } from "react";

// Como quiero que sea mas dinamico el Hook le pasamos un valor inicial en caso de no pasarle nada de argumentos
export const useForm = ( initialForm = {} ) => {

    // estate del functional componet 
    const [formState, setFormState] = useState( initialForm )

    // Funcion que realiza el cambio del 
    const onInputChange = ({target}) => {
        // Extraemos del target las variables que contiene los valores del input 
        const {value, name} = target;

        //Cambiamos el estado del State copiando el anterior y cambiando en base a su nombre el value
        setFormState({
            ...formState,
            // establesco el name y tomara el valor
            // Tomo el nombre del campo y le mando su valor 
            [ name ] : value
        })
    }
    const onResetForm = () => {
        console.log(formState)
        setFormState(initialForm)
    }

    // Es preferible retornar objetos
   return{
    ...formState,
    formState,
    onInputChange,    
    onResetForm,  

   }
}
