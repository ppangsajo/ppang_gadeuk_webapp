import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
function PageHeaderStandard() {

    return (
        <Header>
            <Nav>
                <Link to="/Map">
                    <Button>근처 빵집 찾기</Button>
                </Link>
                <Link to="/ClickerGameMain">
                    <Button>클리커 게임</Button>
                </Link>
                <Link to="/BakingClass">
                    <Button>홈베이킹 클래스</Button>
                </Link>
            </Nav>
        </Header>
    );
}

export const Header = styled.header`
  width: 100%;
  background-color: #ECAB81;
  display: flex; /* Flexbox 활성화 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
`;

export const Nav = styled.nav`
  width: 70%;
  display: flex; /* Flexbox 활성화 */
  justify-content: space-evenly; /* 자식 요소 간 균등한 간격 설정 */
  align-items: center; /* 세로 방향으로 중앙 정렬 */
`;

export const Button = styled.button`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #ECAB81;
  color: white;
  font-size: 2vw;
  font-family: 'OurFont2';
  cursor: pointer;
  border: none;
`;
export default PageHeaderStandard;
