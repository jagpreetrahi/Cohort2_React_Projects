
import React  from "react";
import { counterData, inputText } from "./store/atoms/text";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";


function App() {
 
  

  return (
   
    <RecoilRoot>
       <InputData/>
    </RecoilRoot>
  )
}

function InputData(){
    return <div>
       <InputField/>
       <Counter/>
    </div>
}

function InputField(){
   const [text , setText] = useRecoilState(inputText);

 
   return <div>
       <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
       <Echo ></Echo>

   </div>
}

function Echo(){
    const text = useRecoilValue(inputText);

    return <div>
      Echo : {text}
    </div>
}

function Counter(){
  const counter = useRecoilValue(counterData);

  return <div>
      <h1>
         Character Counter {counter}
      </h1>
     
  </div>
}




export default App
