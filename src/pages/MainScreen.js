import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Main, Header, Center, P, Nav, Button } from '../styles/MainScreenStyles';
import Card from '../components/MainScreenCards';

function MainScreen() {
    useEffect(() => {
        document.body.className = 'body-MainScreen';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <Main>
            <Header>
                <Nav>
                    <Link to="/Map">
                        <Button>근처 빵집 찾기</Button>
                    </Link>
                    <Link to="/ClickerGame">
                        <Button>클리커 게임</Button>
                    </Link>
                    <Link to="/BakingClass">
                        <Button>홈베이킹 클래스</Button>
                    </Link>
                </Nav>
            </Header>
            <Center>
                <P>ppang gadeuk</P>
                <Card />
            </Center>
        </Main>
    );
}

export default MainScreen;