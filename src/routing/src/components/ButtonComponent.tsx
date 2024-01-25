import React from "react";

interface ButtonComponentProps {
    handleIncrement: () => void;
    handleDecrement: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({handleIncrement, handleDecrement}) => {
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default ButtonComponent;
