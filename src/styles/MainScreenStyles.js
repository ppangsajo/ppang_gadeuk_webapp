import styled from 'styled-components';
import backgroundImage from '../assets/images/mainScreen.png';

export const Center = styled.div`
  width: 100%;
  height: 75vh; /* 높이를 명시적으로 설정 */
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-image: url(${backgroundImage});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  padding-top: 80px; /* PageHeader의 높이에 맞는 여백 추가 */
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

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

export const ImageContainer = styled.div`
  position: relative; /* 자식 요소의 절대 위치 기준 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; /* 컨테이너 상단 여백 */
  max-width: 1200px; /* 최대 너비 설정 */
`;

export const ImageItem = styled.img`
  position: relative;
  width: clamp(10vw, 12%, 150px); /* 최소, 최대 크기 설정 */
  height: auto; /* 비율을 유지하면서 높이 조정 */
  transform-origin: center center; /* 회전 기준 설정 */
  transform: scale(0.7); /* 기본 크기 유지 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */

  &:nth-child(1) {
    transform: rotate(-45deg); /* 첫 번째 카드 */
  }
  &:nth-child(2) {
    transform: rotate(-25deg); /* 두 번째 카드 */
  }
  &:nth-child(3) {
    transform: rotate(0deg); /* 세 번째 카드 */
  }
  &:nth-child(4) {
    transform: rotate(15deg); /* 네 번째 카드 */
  }
  &:nth-child(5) {
    transform: rotate(35deg); /* 다섯 번째 카드 */
  }

  /* 반응형 줄어듦에 따라 위치 조정 */
  @media (max-width: 768px) {
    margin: 5px; /* 작은 화면에서 간격 축소 */
  }
`;