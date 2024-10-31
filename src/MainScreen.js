import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MainScreen.css';

function MainScreen() {
    return (
        <main className='MainScreen-main'>
            <header className='MainScreen-header'>
                <h1>🥖🍞🥐 ppang-gadeuk 🥐🍞🥖</h1>
                <nav className='button-container'>
                    {/* 버튼 클릭시 url 이 /~~ 으로 변경됨. 이후 이 url 변경을 Router.js 모듈의 BrowserRouter 컴포넌트가 감지하여 url에 따른 컴포넌트를 화면에 렌더링시켜줌*/}
                    <Link to="/Map"><button>근처 빵집 찾기</button></Link>
                    <Link to="/ClickerGame"><button>클리커 게임</button></Link>
                    <Link to="/BakingClass"><button>홈베이킹 클래스</button></Link>
                </nav>
            </header>
        </main>
    );
}

export default MainScreen;