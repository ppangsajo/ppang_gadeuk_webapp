import styled from 'styled-components';

export const Container = styled.div`
  background-color: #E3ECF1;
`;

export const SideBarComponent = styled.div`
  position: fixed;
  z-index: 20;
  background-color: #E3ECF1;
  color: #202020;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 4px solid #202020;
  transition: 0.4s ease;
  height: 100%;
  width: ${({ width }) => `${width}px`}; 
  transform: ${({ xPosition }) => `translatex(${xPosition}px)`}; 
`;

export const SideBarButton = styled.button`
  position: relative;
  z-index: 20;
  border: 2px solid #202020;
  border-radius: 40px;
  height: 40px;
  width: 40px;
  top: 10px;
  left: 360px;
  transition: 0.8s ease;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none; 
  // 버튼 클릭시 이 버튼이미지가 클릭 이벤트를 가로채서 클릭이 안되는 문제 해결을 위해, 이미지 클릭 이벤트 무시
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 40px 0 20px;
`;
