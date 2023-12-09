import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Francisco2",
        email: "arroba@correo.com"
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {value, name} = target;

        setFormState({
            ...formState,
            // establesco el name y tomara el valor
            // Tomo el nombre del campo y le mando su valor 
            [ name ] : value
        })
    }


    useEffect( () => {
      // console.log('formState Change')
    
    }, [formState])
    

    // Useefect Consta de 3 partes 
    useEffect(() => {
      // Creamos algun tipo de listener 
      
      // Cleanup parte de la limpieza. Se usa cuando se quiere limpiar o cancelar algo 
      // limpiamos el listener 
      return () => {
      }

    }, [])
    
    

  return (
    <>
        <h1>Formulario Simple </h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="arroba@correo.com"
            name="email" 
            value={email}
            onChange={onInputChange}
        />

        {
          (username === 'Francisco2') && <Message />
        }
    </>
  )
}
