import React, { useEffect, useState } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';
import styled from 'styled-components';

const DIV = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10.5em; //지도의 상단 여백
  padding: 30px;
  background-color: #ffffff;
  border-radius: 45px;
`;
// BakeryMap 페이지는 메인 메뉴에서 BakeryMap으로 라우팅된 후에 화면에 렌더링되는,그려지는 컴포넌트
function BakeryMap() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <DIV> {/* DIV는 주변빵집찾기 페이지의 최상위 엘리먼트.body바로 다음 */}
            <SideBar width={450} places={places} />
            <Map setPlaces={setPlaces} />
        </DIV>
    );
}

export default BakeryMap;