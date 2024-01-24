import {useMemo, useState} from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState<number>(0);
    let factorial:number =0;

    factorial = useMemo(() => {
        if (input === 0) {
            return 0;
        }
        let result = 1;
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
        return result;
    }, [input]);

    return (
        <div>
            <input
                type="string"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {factorial===0?0:factorial}</p>
        </div>
    );
}