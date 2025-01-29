import { memo, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
     const [count , setCount] = useState(0);
     const [inputValue , setInputValue] = useState(1);

     let count1 = useMemo(() => {
      let sum = 0;
        for(let  i = 0; i <= inputValue; i++){
                sum += i;
         }
         return sum;
     } , [inputValue])

   //   const [finalValue , setFinalValue] = useState(0);
      
   //   useEffect(() => {
   //       let sum = 0;
   //       for(let  i = 0; i <= inputValue; i++){
   //          sum += i;
   //       }
   //       setFinalValue(sum);
   //    } , [inputValue])

   
     
 
  return (
    <>
        <input type="text" placeholder='Enter your number' onChange={(e) => {
          setInputValue(e.target.value);
          
         
           
        }}/> <br /> <br />
        Sum of {inputValue}  is {count1}<br></br>
        
       <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  )
}

// function Todo({id}){



  /**  App part
   *  <button onClick={() => setId(1)} >1</button>
       <button onClick={() => setId(2)} >2</button>
       <button onClick={() => setId(3)} >3</button>
       <button onClick={() => setId(4)} >4</button>
        <Todo id = {todoId}></Todo>
   */

 /*

   const [todo , setTodo] = useState({});

   useEffect(() => {
      axios.get("https://localhost:3000/todos" + id)
       .then((res) => {
        setTodo(res.data.todos)
       })
   } , [id])

  return <div>
   <h1>
      {todo.title}
   </h1>
   <h2>{todo.description}</h2>
  </div>
}
*/ 



export default App
