import React, { useState } from "react";


const CardComponent = React.lazy(() => import("./component/Creatcard"))
const Formcard = React.lazy(() => import("./component/Formcard"))
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  const [card , setCard] = useState([{
    id :1,
    Name : "",
    description : "",
    social_icons : [],
    interests_section : []

  }])
   return <div>
        <BrowserRouter>
            
           <Routes>
              <Route path="/" element = {
                  <WrapperComponent>
                  
                     <Formcard/>
                   
                  </WrapperComponent>
               }/>
               <Route path="/card" element = {
                  <WrapperComponent>
                        {card.map((cd) => <CardComponent key={cd.id} name = {cd.Name} description={cd.description}  interests_section={cd.interests_section} social_icons={cd.social_icons}/>)}
                      
                  </WrapperComponent>
               }/>      
           </Routes>
        </BrowserRouter>
        
      
   </div>
}





function WrapperComponent({children}){
  return <div style={{border : "1 px solid red" , background : "pink",
     width : "400px " , height : "400px" , margin : "0 auto", 
  }}>
     {children}
  </div>
}



export default App;