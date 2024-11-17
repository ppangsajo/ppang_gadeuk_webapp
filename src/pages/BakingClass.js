import React, { useEffect } from 'react';
import { Container, H1 } from '../styles/BakingClassStyles';

function BakingClass() {

    useEffect(() => {
        document.body.className = 'body-BakingClass';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <Container>
            <H1>Baking Page</H1>
            <p>This is the baking page!</p>
        </Container>
    );
}

export default BakingClass;
