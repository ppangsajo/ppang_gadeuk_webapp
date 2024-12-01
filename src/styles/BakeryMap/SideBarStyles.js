// src/styles/BakeryMap/SideBarStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFDD0;
`;

// 사이드바 제목에 <h2> 사용
export const SideBarTitle = styled.h2`
    text-align: center;
    padding: 50px 0;
    font-family: 'OurFont1', sans-serif; /* 원하는 폰트 */
    font-size: 30px;
    font-weight: bold;
    color: black;
    background-color:#F4A460;  //F4A460  #ECAB81 #d67935
`;


export const CurrentLocation = styled.p`
    text-align: center;
    padding: 20px 0;
    font-size: 15px;
    font-weight: bold;
    color: #333;
    
    color: black;
    background-color:#FFF5EE   //#F5F5DC  #fcfcfc  #fff6eb;
    border-bottom: 6px double #ddd;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

`;


export const SideBarComponent = styled.div`
  position: fixed;
  z-index: 20;
  background-color:#FFF5EE; // #fff4eb; ; {/* //사이드바 배경색 #베이지 색상: #F5F5DC 크림색상: #FFFDD0 라이트 브라운 색상: #D2B48C 페일 옐로우 색상: #FAFAD2 화이트 : #fcfcfc*/}
  color: #202020;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 3.5px solid #202020;
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
  border: 3.5px solid #202020;
  border-radius: 40px;
  height: 50px;
  width: 50px;
  //top: 10px;
  top: 50%; // 수직중앙에 위치하도록 설정
  //left: 360px;
  left: ${({ width }) => `${width}px`}; // 사이드바의 크기 + 10을 사용하여 버튼 위치 설정. left는 사이드바의 왼쪽사이드 기준으로 설정되기 때문에 사이드바의 너비를 더해줌.
  transition: 0.8s ease;
  cursor: pointer;
  //background-color: #f4a460; /* 주황색 배경 */

 &:hover {
  transform: scale(0.9) rotateY(20deg); // rotateY 값 증가
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); // box-shadow 값 조정 */
  transition: 0.5s ease; // 축소되는 빠르기 조정
  
}
`;

export const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

//사이드바의 콘텐츠를 담는 컨테이너 컴포넌트
export const Content = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 180px); //컨테이너 높이 조절. 기존에는 -60px이었으나, -180px로 컨테이너의 높이를 축소하여 -> 사이드바 밖으로 넘치지않도록해줌. 화면 하단에 위치한 버튼이 화면에 가려지는 문제 해결
  padding: 20px 20px 20px 20px; //top, right, bottom, left
  //padding: 20px; //상하좌우 20px. 위 속성값과 동일.
  overflow-y: auto; /*스크롤바*/
  box-sizing: border-box; /*padding값을 포함한 전체 너비를 설정*/
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  transition: 0.2s ease; //hover 효과를 위한 transition

  &:hover {
    transform: translateY(-10px); // hover 시 위로 살짝 이동효과
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.55); // hover 시 그림자 강조
  }
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
  margin: 0 0 5px 0; /* 아래쪽 마진 추가 */
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ListItemAddress = styled.span`
  margin-top: 1px;
  font-size: 14px;
  color: #666;
`;

export const ListItemDistance = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: #777;
`;