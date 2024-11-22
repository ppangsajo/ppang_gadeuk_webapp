import React, { useEffect } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';
import styled from 'styled-components';

const DIV = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

function BakeryMap() {
    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <DIV>
            <SideBar width={350} />
            {/* StyledH1 컴포넌트를 사용하여 제목을 스타일링 */}
            <StyledH1>가까운 빵집을 만나보세요!</StyledH1>
            <Map />
        </DIV>
    );
}

export default BakeryMap;