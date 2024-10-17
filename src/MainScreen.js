import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MainScreen.css';
function MainScreen() {
    return (
        <div>
            <h1>🥖🍞🥐 ppang-gadeuk 🥐🍞🥖</h1>
            <div className="button-container">
                <Link to="/map"><button>근처 빵집 찾기</button></Link>
                <Link to="/ClickerGame"><button>클리커 게임</button></Link>
                <Link to="/bakingClass"><button>홈베이킹 클래스</button></Link>
            </div>
        </div>
    );
}

export default MainScreen;