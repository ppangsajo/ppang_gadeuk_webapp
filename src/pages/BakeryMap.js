import React, { useEffect, useState } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';
import styled from 'styled-components';
import PageHeader1 from '../components/PageHeader1.js';

const DIV = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2.5em; //지도의 상단 여백
  padding-top: 80px; /* PageHeader의 높이에 맞는 여백 추가 */
  padding: 30px;
  background-color: #ffffff;
  border-radius: 45px;
`;

// h1 제목 스타일링
const StyledH1 = styled.h1`
  color: #241308; /* 텍스트 색 */
  text-align: center; /* 중앙 정렬 */
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'OurFont1', sans-serif; /* 원하는 폰트 */
  font-size: 30px;
`;

// BakeryMap 페이지는 메인 메뉴에서 BakeryMap으로 라우팅된 후에 화면에 렌더링되는,그려지는 컴포넌트
function BakeryMap() {
    const [places, setPlaces] = useState([]); //장소데이터 상태를 최상단인BakeryMap컴포넌트에서 관리. Map컴포넌트에게는 장소데이터를 전달해주고 Map 컴포넌트에게는 장소테이터 상태변경함수를 전달해줌으로써 장소데이터를 다룰 수 있게 함.

    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        
        <DIV> {/* DIV는 주변빵집찾기 페이지의 최상위 엘리먼트.body바로 다음 */}
        <PageHeader1 />
            <SideBar width={450} places={places} />
            {/* StyledH1 컴포넌트를 사용하여 제목을 스타일링 */}
            <StyledH1>가까운 빵집을 만나보세요!</StyledH1>
            <Map setPlaces={setPlaces} />
        </DIV>
    );
}

export default BakeryMap;