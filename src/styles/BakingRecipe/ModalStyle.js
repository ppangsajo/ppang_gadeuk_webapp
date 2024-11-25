import styled from 'styled-components';

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75); /* 오버레이 배경색 */
  position: fixed; /* 고정 위치 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex; /* 중앙 정렬을 위해 Flexbox 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  z-index: 1000; /* 다른 요소 위에 표시 */
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #fff; /* 모달 배경색 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  max-width: 600px; /* 최대 너비 설정 */
  width: 100%; /* 너비 100% */
  z-index: 1001; /* 오버레이보다 위에 표시 */
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  font-family: 'CookieRun-Bold';
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  font-family: 'CookieRun-Regular';
  margin: 10px 0;
`;

export const RecipeImage = styled.img`
  margin-left: 163px;
`;
