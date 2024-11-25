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
  position: relative; /* 자식 요소의 절대 위치를 위한 상대 위치 설정 */
  padding: 20px;
  border-radius: 10px;
  background-color: #fff; /* 모달 배경색 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  max-width: 600px; /* 최대 너비 설정 */
  width: 100%; /* 너비 100% */
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  font-family: 'OurFont4';
`;

export const RecipeTitle = styled.h3`
  font-size: 26px;
  font-family: 'OurFont5';
  margin: 10px 0;
`;
export const RecipeSubTitle = styled.h4`
  font-size: 20px;
  font-family: 'OurFont5';
  margin: 10px 0;
`;

export const RecipeImage = styled.img`
  margin-left: 163px;
`;

export const CloseButton = styled.button`
  position: absolute; /* 절대 위치 설정 */
  top: 10px; /* 상단에서 10px */
  right: 10px; /* 오른쪽에서 10px */
  background: none; /* 배경 없음 */
  border: none; /* 테두리 없음 */
  font-size: 24px; /* 글자 크기 */
  cursor: pointer; /* 커서 포인터로 변경 */
  color: #333; /* 글자 색상 */

  &:hover {
    color: #ff0000; /* 호버 시 색상 변경 */
  }
`;

export const HorizontalLine = styled.hr`
  border: 0.7px solid black;
`;
