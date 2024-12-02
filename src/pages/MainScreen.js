import React, { useEffect } from 'react';
import { Main, Center, P } from '../styles/MainScreenStyles';
import Card from '../components/MainScreenCards';
import PageHeader from '../components/PageHeader';

function MainScreen() {
    useEffect(() => {
        document.body.className = 'body-MainScreen';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <Main>
            <PageHeader />
            <Center>
                <P>ppang gadeuk</P>
                <Card />
            </Center>
        </Main>
    );
}

export default MainScreen;