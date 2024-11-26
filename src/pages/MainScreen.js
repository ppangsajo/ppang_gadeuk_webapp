import React, { useEffect } from 'react';
import { Main, Center, P } from '../styles/MainScreenStyles';
import Card from '../components/mainScreen/MainScreenCards';
import PageHeaderStandard from '../components/PageHeaderStandard';

function MainScreen() {
    useEffect(() => {
        document.body.className = 'body-MainScreen';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <Main>
            <PageHeaderStandard />
            <Center>
                <P>ppang gadeuk</P>
                <Card />
            </Center>
        </Main>
    );
}

export default MainScreen;