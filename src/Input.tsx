import {ChangeEvent, useEffect, useState} from "react";

const Input = () => {
    const [count, setCount] = useState<number>(0);
    const [currentSum, setCurrentSum] = useState<number | string>(0);
    const [currentInput, setCurrentInput] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        setCurrentInput(inputValue === "" ? "" : inputValue);
    }

    useEffect(() => {
        calculateSum();
    }, [currentInput]);

    function calculateSum(): void {
        const currentNumber = parseFloat(currentInput);
        currentInput === "" ? setCurrentSum(0) : setCurrentSum((currentNumber * (currentNumber + 1)) / 2);

    }

    return (
        <div>
            <input
                placeholder="enter your number"
                type="number"
                value={currentInput === '' ? '' : currentInput}
                onChange={handleInputChange}
            />
            <h1>Current Sum is {currentSum}</h1>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
    );
};

export default Input;
