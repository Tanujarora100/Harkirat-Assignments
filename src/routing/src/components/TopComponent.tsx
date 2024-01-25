import ButtonComponent from "./ButtonComponent.tsx";
import CountComponent from "./CountComponent.tsx";
import {useCallback, useState} from "react";


const TopComponent = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);

    }, [count]);
    const handleDecrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);


    return (
        <div>
            <ButtonComponent handleDecrement={handleDecrement} handleIncrement={handleIncrement}></ButtonComponent>
            <CountComponent count={count}></CountComponent>
        </div>
    );
};

export default TopComponent;