// Idea general sobre el reducer

    //Que es el inicial State, cuenta con toda la tarea que tenemos que hacer 
    const intialState = [{
        id: 1,
        todo: "Recolectar la piedra del alma",
        done: false,
    } ]  



    // Mi reducer (Es una simple funcion pero que recibe 2 argumentos)
        // state = si no le proporciono nada sera el intialState
        // action  = sera quien me diga como quiero que se cambie el estado
        // Siempre rebe de regresar un estado 


    const todoTeducer = (state= intialState, action={}) =>{
        // Reducer no es mas que una funcion pura que regresa un state

        if(action.type == "[TODO] add todo" ){
            // retornare un arreglo con el mismo state y agregare lo que viene del payload 
            return [...state, action.payload]
        }

        return state;
    }


    // Si queremos hacer una modificacion debe de mandarle una accion que le dice como se modificara 
    const newTodo = {
        id:2,
        todo:"recolectar la piedra",
        done: false
    }

    let todo = todoTeducer();

    const addTodoAction = {

        type: '[TODO] add todo',
        // accion 
        payload: newTodo,
    }

    todo = todoTeducer(todo, addTodoAction)

    // No se debe de hacer MUTACION
    // todo.push({
    //     id:2,
    //     todo:"recolectar la piedra",
    //     done: false
    // })


    console.log(todo)