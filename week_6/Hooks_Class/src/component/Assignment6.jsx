import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment6() {

    const inputText = useRef(null);

    useEffect(() => {
        if(inputText.current){
            inputText.current.focus();
        }
        
    }, []);

    const handleButtonClick = () => {
        if(inputText.current){
            inputText.current.focus();
        }
       
    };

    return (
        <div>
            <input ref = {inputText}type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};