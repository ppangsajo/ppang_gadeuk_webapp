import React from 'react';
import styled from 'styled-components';

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background: rgba(255, 255, 255, 0.8); // 4번째 값은 투명도
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

// 로드뷰용 간단한 커스텀 오버레이 컴포넌트
const RoadViewOverlayContent = ({ place }) => {
    return (
        <OverlayContainer>
            <Title>
                {place.place_name}
            </Title>
        </OverlayContainer>
    );
};

export default RoadViewOverlayContent;