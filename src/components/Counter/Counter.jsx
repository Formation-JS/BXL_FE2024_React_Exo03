import { useState } from "react";

const INITIAL_COUNT = 0;

const Counter = ({ step = 1 }) => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () => {
        setCount(count => count + step)
    };

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <>
            <p>Compteur : {count}</p>
            <button onClick={handleIncr}>+{step}</button>
            {count !== INITIAL_COUNT && (
                    <button onClick={handleReset}>Reset</button>
            )}
        </>
    );
};

export default Counter;