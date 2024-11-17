import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Main, Header, H1, Nav, Button } from '../styles/MainScreenStyles';

function MainScreen() {
    //body 색상 설정.
    useEffect(() => {
        document.body.className = 'body-MainScreen';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <Main>
            <Header>
                <H1>🥖🍞🥐 ppang-gadeuk 🥐🍞🥖</H1>
                <Nav>
                    {/* 버튼 클릭시 url 이 /~~ 으로 변경됨. 이후 이 url 변경을 Router.js 모듈의 BrowserRouter 컴포넌트가 감지하여 url에 따른 컴포넌트를 화면에 렌더링시켜줌*/}
                    <Link to="/Map"><Button>근처 빵집 찾기</Button></Link>
                    <Link to="/ClickerGame"><Button>클리커 게임</Button></Link>
                    <Link to="/BakingClass"><Button>홈베이킹 클래스</Button></Link>
                </Nav>
            </Header>
        </Main>
    );
}

export default MainScreen;