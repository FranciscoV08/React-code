// Es un estandar colocar la palabra "use". Es un estandar para react
// Es una simple funcion y retorna algun Obj o array o lo que se necesite 

import { useState } from "react"

// asumo que la persona me enviara el valor para utilizar el componente 
// En caso de que no me envie nada le defino un valor por defecto

export const useCounter = ( initialValue = 10) => {

    // Hook usestate 
    // Toma el argumento que le pasaremos o el valor predeter.
    const [counter, setCounter] = useState( initialValue )
 

    // Funciones que son funcionalidades de nuestro CustomHook
    const increment =  ( value= 1 ) =>{
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        // validacion para ( un carrito de compras )
        // if(counter === 0){
        //     return 
        // }
        setCounter(counter - value);
    }
    const reset = () => {
        setCounter(initialValue)
    }
    // Exponemos nuestras funcionalidades para utilizarlo afuera 
    return{
        counter,
        increment,
        decrement,
        reset,

    }

}