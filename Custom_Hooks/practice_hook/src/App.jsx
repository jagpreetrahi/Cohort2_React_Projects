import React, { useEffect, useState } from 'react'

import './App.css'

function useTodo(n){
   const [todos , setTodo] = useState([]);
   const [loading , setLoading] = useState(true);

   useEffect(() => {
     const value=  setInterval(() => {
        axios.get("http://localhost/3000/todos")
        .then(res => {
          setTodo(res.data.todos)
          setLoading(false)
        })
      } , n * 1000)

      axios.get("http://localhost/3000/todos")
      .then(res => {
        setTodo(res.data.todos)
        setLoading(false)
      })
      
      return () => {
        clearInterval(value)
      }
  }, [n])

   return {todos , loading};
}

function App() {
    const todos = useTodo(n)

   

  return (
    <>
       {
          todos.map((todo) => <Todo title={title} description={description}/>)
       }
    
    </>
  )
}

function Todo({title , description}){
   return <div>
       <div>
          <h3>{title}</h3>
          <h3>{description}</h3>
       </div>
   </div>
}

function CountIncreament(){
 
  useEffect(() => {

    console.error("Component mounted")

    return  () => {
      console.log("component unmount")
    }

  } , [])

   return <div>
      <h1>From inside the component</h1>
  </div>
}



export default App
