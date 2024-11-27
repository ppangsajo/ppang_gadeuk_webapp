import styled from 'styled-components';
import backgroundImage from '../assets/images/ClickerGameMainScreen.png';
import tutorial1 from '../assets/images/ClickerGameTutorialBGI1.png';
import tutorial2 from '../assets/images/ClickerGameTutorialBGI2.png';
import tutorial3 from '../assets/images/ClickerGameTutorialBGI3.png';
import tutorial4 from '../assets/images/ClickerGameTutorialBGI4.png';
import tutorial from '../assets/images/ClickerGameTutorialButton.png';

export const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-image: url(${backgroundImage});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  position: relative; /* 자식 요소의 절대 위치 기준 설정 */
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const TutorialButton = styled.div`
  z-index: 100;
  width: min(20vw, 20vh); /* 가로와 세로 중 작은 값 기준으로 크기 설정 */
  height: min(20vw, 20vh); /* 가로와 세로 중 작은 값 기준으로 크기 설정 */
  background-image: url(${tutorial});
  background-size: contain; /* 이미지 비율 유지하면서 크기 조정 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */
  background-position: center; /* 이미지를 가운데 정렬 */
  position: absolute; /* 절대 위치 지정 */
  top: 30vh; /* 세로 20vh 위치 */
  left: 20vw; /* 가로 20vw 위치 */
`;


export const Chapter = styled.div`
  position: relative; /* 자식 요소의 절대 위치 기준 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; /* 컨테이너 상단 여백 */
  max-width: 1200px; /* 최대 너비 설정 */
`;


export const ChapterContainer = styled.div`
  position: relative; /* 자식 요소의 절대 위치 기준 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; /* 컨테이너 상단 여백 */
  max-width: 1200px; /* 최대 너비 설정 */
  left: 10vw; /* 가로 20vw 위치 */
  top: -20vh;
`;

export const ChapterItem = styled.img`
  position: relative;
  width: clamp(7vw, 9%, 130px); /* 최소, 최대 크기 설정 */
  height: auto; /* 비율을 유지하면서 높이 조정 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */

  /* 반응형 줄어듦에 따라 위치 조정 */
  @media (max-width: 768px) {
    margin: 5px; /* 작은 화면에서 간격 축소 */
  }
`;

export const TutorialStep1Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; /* Flexbox 활성화 */
  flex-direction: row; /* 가로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: flex-end; /* 세로 정렬: 하단 정렬 */
  background-image: url(${tutorial1});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  position: relative; /* 자식 요소의 절대 위치 기준 설정 */
  gap: 20px; /* 두 요소 간격 */

`;

export const TutorialStep2Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-image: url(${tutorial2});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  position: relative; /* 자식 요소의 절대 위치 기준 설정 */
`;

export const TutorialStep3Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-image: url(${tutorial3});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  position: relative; /* 자식 요소의 절대 위치 기준 설정 */
`;

export const TutorialStep4Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-image: url(${tutorial4});
  background-size: cover; /* 이미지가 영역을 채우도록 설정 */
  background-position: center; /* 중앙에 위치 */
  position: relative; /* 자식 요소의 절대 위치 기준 설정 */
`;

export const TutorialMessage = styled.div`
  width: 75%;
  height: 12%;
  display: flex; /* Flexbox 활성화 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-color: rgba(255, 255, 255, 0.5); /* 반투명 흰색 배경 */
  border-radius: 50px; /* 끝부분 둥글게 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 살짝 그림자 추가 */
  color: black; /* 텍스트 색상 */
  font-size: min(3vw, 3vh);
  font-family: 'OurFont2'; /* 글꼴 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding: 10px; /* 내부 여백 */
  margin-bottom: 2%; /* 하단 여백 */
`;

export const NextButton = styled.div`
  width: 10%;
  height: 12%;
  display: flex; /* Flexbox 활성화 */
  justify-content: center; /* 가로 정렬: 중앙 */
  align-items: center; /* 세로 정렬: 중앙 */
  background-color: rgba(255, 255, 255, 0.7); /* 반투명 흰색 배경 */
  border-radius: 50px; /* 끝부분 둥글게 */
  color: black; /* 텍스트 색상 */
  font-size: min(3vw, 3vh);
  font-family: 'OurFont2'; /* 글꼴 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  padding: 10px; /* 내부 여백 */

  margin-bottom: 2%; /* 하단 여백 */
`;