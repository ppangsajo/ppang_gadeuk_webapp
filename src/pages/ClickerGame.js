import React, { useState, useEffect } from 'react';
import { Container, H1, Button } from '../styles/ClickerGameStyles';

const ClickerGame = () => {
    const [count, setCount] = useState(0);
    //body color
    useEffect(() => {
        document.body.className = 'body-ClickerGame';
        return () => {
            document.body.className = '';
        };
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <Container>
            <H1>Clicker Game</H1>
            <p>Count: {count}</p>
            <Button onClick={handleClick}>클릭!</Button>
        </Container>
    );
};

export default ClickerGame;
