import { useMemo, useState } from "react";

export function Assignment1(){
    
   const [input , setInput] = useState(0);

    const expensiveValue = useMemo(() => {

        let n = input;
        let result  = 1;
        if(n < 0) return "Invalid";
        for(let i = n; i > 1 ; i--){
             result *= i;

        }
        return result
    } , [input])

   return (
       <div>
          <input 
             type="number"
             value={input}
             onChange={(e) => setInput(Number(e.target.value))}
         />
         <p>Calculated : {expensiveValue}</p>
       </div>
   )

}