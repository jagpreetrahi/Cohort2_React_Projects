

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenAtom } from './store/atoms/count'
import React from 'react';





function App() {

  

  return (
    
    <div>
       <RecoilRoot>
         <Count/>
       </RecoilRoot>
     
      
    
    </div>
    
    
    
  )
}

function Count(){

  return <div>
     <CountRender/>
     <Button />
  </div>

}

function CountRender(){
  const count = useRecoilValue(countAtom);
    return <div>
      {count}
      <EvenRender/>
    </div>
}

function EvenRender(){
  const isEven = useRecoilValue(evenAtom)

  return <div>
     {isEven ? "It is even" : null}
  </div>
}

function Button(){
  
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
       setCount(count => count + 1);
    }}>Increase the count</button>
    <button onClick={() => {
       setCount( count => count - 1);
    }}>Decrease the count</button>
    <h2></h2>
  </div>

}

export default App
