import React, { useState, useEffect } from 'react';
import { Header, Nav, NavCenter, Button, ImageButton } from '../styles/PageHeader1Styles';
import { Link } from 'react-router-dom';

function PageHeader1({ initialVisibility = true }) { // 초기값을 props로 받도록 수정
  const [isVisible, setIsVisible] = useState(initialVisibility); // 초기값을 props로 설정

  // 마우스 움직임을 추적하는 함수
  const handleMouseMove = (e) => {
    if (e.clientY < 50) { // 마우스가 화면 상단 50px 이내로 올라오면 헤더 보이기
      setIsVisible(true);
    } else { // 마우스가 화면 상단을 벗어나면 헤더 숨기기
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // 마우스 움직임 이벤트 리스너 추가
    window.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Header style={{
      position: 'fixed', // 화면 상단에 고정
      top: isVisible ? '0' : '-80px', // isVisible이 true일 때 보이고, false일 때 위로 숨김
      width: '100%', // 화면 전체 너비
      transition: 'top 0.3s ease-in-out', // 애니메이션 효과
      zIndex: 1000, // 다른 콘텐츠들 위에 위치
    }}>

      <Nav> {/* 좌측 정렬 */}
        <Link to="/">
          <ImageButton> {/* 버튼을 이미지 버튼으로 대체 */}
            <img src={require('../assets/images/homebutton.jpg')} alt=" " />
          </ImageButton>
        </Link>

        <NavCenter>
          <Link to="/BakeryMap">
            <Button>근처 빵집 찾기</Button>
          </Link>
          <Link to="/ClickerGameMain">
            <Button>클리커 게임</Button>
          </Link>
          <Link to="/BakingClass">
            <Button>홈베이킹 클래스</Button>
          </Link>
        </NavCenter>
      </Nav>
    </Header>
  );
}

export default PageHeader1;
