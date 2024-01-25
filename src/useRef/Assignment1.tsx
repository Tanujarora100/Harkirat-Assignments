import {useEffect, useRef} from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input style={{backgroundColor: "purple", borderRadius: "50px", color: "black"}} ref={inputRef} type="text"
                   placeholder="Enter text here"/>
            <button style={{backgroundColor: "mediumseagreen", borderRadius: "50px"}} onClick={handleButtonClick}>Focus
                Input
            </button>
        </div>
    );
}