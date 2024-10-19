import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MainScreen.css';

function MainScreen() {
    return (
        <main className='MainScreen-main'>
            <header className='MainScreen-header'>
                <h1>🥖🍞🥐 ppang-gadeuk 🥐🍞🥖</h1>
                <nav className='button-container'>
                    <Link to="/Map"><button>근처 빵집 찾기</button></Link>
                    <Link to="/ClickerGame"><button>클리커 게임</button></Link>
                    <Link to="/BakingClass"><button>홈베이킹 클래스</button></Link>
                </nav>
            </header>
        </main>
    );
}

export default MainScreen;