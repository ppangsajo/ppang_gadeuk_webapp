// src/styles/BakeryMap/SideBarStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
`;

export const SideBarComponent = styled.div`
  position: fixed;
  z-index: 20;
  background-color: white;
  color: #202020;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 4px solid #202020;
  transition: 0.4s ease;
  height: 100%;
  width: ${({ width }) => `${width}px`}; 
  transform: ${({ $xPosition }) => `translatex(${$xPosition}px)`};  
`;
//React가 인식할 수 있는 props가 아니면 custom props로 인식을 하고, custom props는 소문자로만 작성을 해야하는 Propery 검증 로직이 있음. so, 콘솔로그창 에러제거를 위해 $를 앞에사용


/*
position: relative는 요소를 문서 흐름 내에 유지하면서 자신의 원래 위치를 기준으로 위치를 조정함. 반면  absolute는 문서 흐름에서 독립적인 위치를 가짐. 
즉, SideBarButton이 relative로 설정되면, Content 역시 마찬가지로 relative 이기때문에 둘은 절대적이 아닌 상대적인 위치 관게를 갖게되어 -> SideBarButton의 높이만큼 아래로 밀려 표시되게됨.
so, SideBarButton의 position을 absolute로 변경. 이렇게 하면 SideBarButton이 문서 흐름에서 제외되어 Content를 밀어내지 않음. 독립적인 위치.*/
export const SideBarButton = styled.button`
  position: absolute; 
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

// 사이드바 제목에 <h2> 사용
export const SideBarTitle = styled.h2`
    text-align: center;
    padding: 50px 0;
    font-family: 'OurFont1', sans-serif; /* 원하는 폰트 */
    font-size: 30px;
    font-weight: bold;
    color: black;
    background-color: #F4A460;   
`;
//{/*position: fixed; //top: 0; left: 0; width: 100%;
//z-index: 100; /* 다른 요소들이 제목 아래로 가도록 설정 */
//margin: 0; box-sizing: border-box; */}

export const CurrentLocation = styled.p`
    text-align: center;
    padding: 15px 0;
    font-size: 9px;
    color: black;
    background-color: #white;
    border-bottom: 6px double #ddd;
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
  display: flex;
  align-items: center;
`;

export const ListItemImg = styled.img`
  width: 60px;
  height: 60px;
  //border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemTitle = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ListItemAddress = styled.span`
  font-size: 14px;
  color: #777;
`;

export const ListItemDistance = styled.span`
  font-size: 12px;
  color: #999;
`;