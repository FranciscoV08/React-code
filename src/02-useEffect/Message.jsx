import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {

    const unmouseMove = ({x, y}) => {
      
      const coords = {x, y};
      console.log(coords);
    }

    window.addEventListener( 'mousemove', unmouseMove);
  
    return () => {
    window.removeEventListener('mousemove', unmouseMove);
    }
  }, [])
  

  return (
    <>

     <h3>Usuario ya existe </h3>
    
    </>
  )
}
