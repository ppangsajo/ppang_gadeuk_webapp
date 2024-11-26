import styled from 'styled-components';


export const Header = styled.header`
  width: 100%;
  background-color: #ECAB81;
  display: flex; /* Flexbox 활성화 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  position: fixed; /* 상단에 고정 */
  top: 0; /* 화면 상단에 위치 */
  left: 0; /* 화면 왼쪽에 위치 */
`;

export const P = styled.h1`
  width: 70vw;
  text-align: center;
  font-size: 10vw;
  color: #FFFFFF;
  font-family: 'OurFont2';
  margin-top: 30px; /* 컨테이너 상단 여백 */
`;

export const NavCenter = styled.nav`
  width: 95%;
  display: flex; /* Flexbox 활성화 */
  justify-content: space-evenly; /* 자식 요소 간 균등한 간격 설정 */
  align-items: center; /* 세로 방향으로 중앙 정렬 */
`;


export const Nav = styled.nav`
  width: 98%;
  display: flex; /* Flexbox 활성화 */
  justify-content: 'flex-start'/*좌측 정렬*/
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

export const ImageButton = styled.button`
  padding: 0; /* 이미지 버튼은 패딩이 필요 없으므로 0으로 설정 */
  background: none;
  border: none;
  cursor: pointer;
  margin-top:15px; 

  img {
    width: 45px; /* 버튼의 크기에 맞게 이미지 크기 설정 */
    height: 45px; /* 비율에 맞게 높이 자동 조정 */
    
  }
`;

