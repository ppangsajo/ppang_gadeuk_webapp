// src/components/BakeryMap/SideBar.js
import React, { useRef, useState } from "react";
import { Container, SideBarComponent, SideBarButton, Content, ButtonImg, SideBarTitle, CurrentLocation, ListItem, ListItemImg, ListItemInfo, ListItemTitle, ListItemAddress, ListItemDistance } from "../../styles/BakeryMap/SideBarStyles";
import sideBarBtn from "../../assets/images/BakeryMap/sideBarBtn.png";
import close2 from "../../assets/images/BakeryMap/close2.png";
import listItemImg from "../../assets/images/BakeryMap/marker2.png";

//places prop = 사이드바 내부에 표시될 콘텐츠
const SideBar = ({ width = 280, places, currentAddress, setSelectedItem }) => {
    const [isOpen, setOpen] = useState(false); // 사이드바의 열림/닫힘 여부를 나타내는 상태
    const [xPosition, setX] = useState(width); // 사이드바의 x축 위치를 나타내는 상태 
    const side = useRef(); // 사이드바 DOM 엘리먼트에 대한 참조를 저장하는 side 참조(ref) 객체 



    // useEffect(() => {
    //     // 현재 위치 주소값 확인용
    //     console.log("currentAddress updated:", currentAddress);
    // }, [currentAddress]);




    // button 클릭 시 토글
    //사이드바의 열림/닫힘 상태를 전환하는 함수
    const toggleMenu = () => {
        if (xPosition > 0) { //사이드바가 닫혀있을 경우
            setX(0); //xPosition을 0으로 설정(사이드바를 연다)
            setOpen(true);
        } else {
            setX(width); //사이드바를 닫는다
            setOpen(false);
        }
    };


    //############################사이드바 바깥쪽 클릭시#####################################

    /*
        // 사이드바 바깥쪽(외부) 클릭시 사이드바를 닫아주는 처리를하는 비동기 함수
        const handleClose = async e => {
            let sideArea = side.current; //side ref 객체에 저장된 DOM 엘리먼트
            //sideChildren: 클릭된 요소 (e.target)가 사이드바 내부에 있는지 확인
            let sideCildren = side.current.contains(e.target);
    
            //사이드바가 열려있고 && 사이드바 외부를 클릭했을 경우, 사이드바를 닫는다 
            if (isOpen && (!sideArea || !sideCildren)) {
                //사이드바를 닫는 작업이 순차적으로(동기적으로) 일어나도록 await 사용.
                await setX(width); //setX()로 사이드바 x축 위치를 변경작업이 완료될 때까지
                await setOpen(false); // setOpen()으로 사이드바 열림/닫힘 상태 변경작업을 대기.
                // 즉, 사이드바의 위치를 먼저 설정한 후, 사이드바의 열림/닫힘 상태를 설정하여 정확한 상태 관리를 보장하고자 async/await 사용.
            }
        }
 

    // useEffect: 사이드바 컴포넌트가 마운트/언마운트될 때 handleClose 함수를 window 객체의 클릭 이벤트 리스너에 등록/해제하는 역할
    useEffect(() => {
        // 브라우저 창(윈도우 객체)에 클릭 이벤트 리스너를 추가 -> 브라우저 창 어디든 - 사이드바 외부 클릭 시 handleClose 함수 호출
        window.addEventListener('click', handleClose);
        //사이드바 컴포넌트가 언마운트되면 화면 클릭 이벤트 리스너는 메모리에 존재할 필요가 없으므로 제거해야함. 메모리 누수 방지
        //cleanup 함수를 이용하여-사이드바 컴포넌트가 언마운트될 때 클릭시의 handleClose 이벤트 리스너를 제거
        return () => {
            window.removeEventListener('click', handleClose);
        };
    })
   */

    //#################################################################


    // 사이드바와 버튼, 그리고 사이드바 내부 콘텐츠 jsx를 반환. 즉 사이드바 구조를 정의&반환 -> 화면에 사이드바 렌더링
    return (
        <Container>
            {/* side ref 객체는 바로 이 사이드바 엘리먼트를 참조중 */}
            {/* transform 속성을 이용하여  사이드바의 x축을 변경 즉 이동시킴으로써 사이드바를 열고 닫음 */}
            <SideBarComponent ref={side} width={width} $xPosition={-xPosition}>
                {/* 버튼 클릭 -> toggleMenu() 실행 -> setX,setOpen 상태값 변경-> 재렌더링 -> 사이드바 열기/닫기 수행됨 */}
                <SideBarButton onClick={toggleMenu} width={width + 10}>
                    {isOpen ?
                        <ButtonImg src={close2} alt="btn" /> : <ButtonImg src={sideBarBtn} alt="btn" />
                    }
                </SideBarButton>
                {/* 사이드바 내부에는 places들을 렌더링하여 사이드바의 콘텐츠를 표시 */}
                {/*사이드바 상단 제목 */}
                <SideBarTitle>
                    내 주변 빵집 찾기
                </SideBarTitle>
                {/* 현재 위치 표시 ,현재 위치 api로 불러오기. 가능하다면. */}
                <CurrentLocation>{currentAddress} 주변 빵집 목록</CurrentLocation>
                {/* ButtonContainer 추가 */}
                <Content>
                    <ul>
                        {places.map((place, index) => (
                            <ListItem key={index} onClick={() => setSelectedItem(place)}>
                                <ListItemImg src={listItemImg} alt={place.place_name} />
                                <ListItemInfo>
                                    <ListItemTitle>{place.place_name}</ListItemTitle>
                                    <ListItemAddress>{place.address_name}</ListItemAddress>
                                    <ListItemDistance>{place.distance}m</ListItemDistance>
                                </ListItemInfo>
                            </ListItem>
                        ))}
                    </ul>
                </Content>
            </SideBarComponent>
        </Container>
    );
};

export default SideBar;