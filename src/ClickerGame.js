import React, { useState } from 'react';

const ClickerGame = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Clicker Game</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>클릭!</button>
        </div>
    );
};

export default ClickerGame;