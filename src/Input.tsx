import { ChangeEvent, useMemo, useState } from "react";

const Input = () => {
    const [count, setCount] = useState<number>(0);

    const [currentInput, setCurrentInput] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        setCurrentInput(inputValue === "" ? "" : inputValue);
    }

    const memoizedSum = useMemo(() => {
        const num = parseFloat(currentInput);
        return isNaN(num) ? '' : (num * (num + 1) / 2);
    }, [currentInput]);
    //instead of using  a useEffect here we are using a useMemo and using that variable to show the value  on each request
    //When this currentInput is changed then this value is changing.


    return (
        <div>
            <input
                placeholder="enter your number"
                type="number"
                value={currentInput === '' ? '' : currentInput}
                onChange={handleInputChange}
            />
            <h1>Current Sum is {memoizedSum}</h1>
            <button onClick={() => setCount(count + 1)}>Counter {count}</button>
        </div>
    );
};

export default Input;
