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
  transform: ${({ $xPosition }) => `translatex(${$xPosition}px)`}; 
  //React가 인식할 수 있는 props가 아니면 custom props로 인식을 하고, custom props는 소문자로만 작성을 해야하는 Propery 검증 로직이 있음. so, 콘솔로그창 에러제거를 위해 $를 앞에사용
`;

export const SideBarButton = styled.button`
  position: relative;
  z-index: 20;
  border: 4px solid #202020;
  border-radius: 40px;
  height: 50px;
  width: 50px;
  //top: 10px;
  top: 50%; // 수직중앙에 위치하도록 설정
  //left: 360px;
  left: ${({ width }) => `${width}px`}; // 사이드바의 크기 + 10을 사용하여 버튼 위치 설정. left는 사이드바의 왼쪽사이드 기준으로 설정되기 때문에 사이드바의 너비를 더해줌.
  transition: 0.8s ease;
`;

export const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
//사이드바의 콘텐츠를 담는 컨테이너 컴포넌트
export const Content = styled.div`
  position: relative;
  width: calc(100% - 40px);
  height: calc(100% - 60px); 
  padding: 40px 20px 0 20px;
  overflow-y: auto; /*스크롤바*/
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 95%; /* ListItem의 너비를 100%로 설정 */
`;

export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemTitle = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const ListItemAddress = styled.span`
  font-size: 14px;
  color: #555;
`;

export const ListItemDistance = styled.span`
  font-size: 12px;
  color: #999;
`;