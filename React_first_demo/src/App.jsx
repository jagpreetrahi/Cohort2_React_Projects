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
        <WrapperComponent>
          <input type="text" placeholder="Enter your todo"  style={{padding : "10px"}}/> <br /> <br />
          <input type="text" placeholder="Enter your description" style={{padding : "10px"}}/> <br />  <br />
           <button onClick={updateTodo}>Add the new todo</button>
           {todos.map((todo) => <Todo key={todo.id} title = {todo.title} description={todo.description}></Todo>)}
        </WrapperComponent>
      
    </>
}

function WrapperComponent({children}){
    return <div style={{
       margin : "20px",
       padding : "10px",
       color : "red",
       fontFamily : "sans-serif",
       
    }}>
      {children}
    </div>
}


export default App

