import Todo  from "./component/Todo"
import { useState } from "react"
function App(){
  const [todos ,  setTodos] = useState([{
    id : 1,
    title : "DOing some staff",
    description : "Hey buddy light weight"
    },
    {
        id : 2,
        title : "Go some staff",
        description : "Hey buddy  weight"
    }, {
        id : 3,
        title : "DOing some ",
        description : "Hey buddy light "
    }])

    function updateTodo(){

      setTodos([...todos , {
        id : 5,
        title : "Go to the gym",
        description : "From 5-9pm"
        
      }])
    }

    return <>
       <button onClick={updateTodo}>Add the new todo</button>
       {todos.map((todo) => <Todo key = {todo.id} title = {todo.title} description = {todo.description}></Todo>)}
    </>
}


export default App

