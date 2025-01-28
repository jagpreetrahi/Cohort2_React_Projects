import { useState } from 'react'



// import Createcard  from './component/Creatcard'
import Usercard from './component/Usercard'



function App() {
  //  const [card , setCard] = useState([{
  //     id : 1,
  //     name  : "Jagpreet Singh",
  //    description : "I am a founder of unicorn company",
  //    interest_section : ['Ionic' , 'OpenSource' , 'App Dev']

     
  //  }])

  return (
    <>
         <Usercard></Usercard>
        {/* {card.map((cd) => <Createcard  key = {cd.id} name = {cd.name} description = {cd.description} interest_section = {cd.interest_section}></Createcard>)} */}
    </>
  )
}






export default App
