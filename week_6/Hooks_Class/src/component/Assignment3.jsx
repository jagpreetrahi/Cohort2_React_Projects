import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    function addItems(){
         setItems([...items , {
            name : "Pepsi" , value : 40
         },{
            name : "Vada Pav" , value : 20
         }])
    }

    // Your code starts here
    const totalValue = useMemo(() => {
        let count  = 0;
        items.forEach((item) => {
              count += item.value;
        })
        return count;
    } , [items])
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <button onClick={addItems}>Set Item</button>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};