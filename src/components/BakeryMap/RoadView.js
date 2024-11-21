import React from 'react';
import { Roadview } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import PulseButton from '../../styles/BakeryMap/button';

const RoadViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 8px; /* 컨테이너에 둥근 모서리 추가 */
  overflow: hidden; /* 컨테이너 내부 요소가 밖으로 나가지 않도록 */
`;

// //styled(~): ~의 기본 스타일을 유지 + 필요한 추가 스타일 적용
const CloseButton = styled(PulseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;


const RoadView = ({ position, onClose }) => {
  return (
    <RoadViewContainer>
      <CloseButton onClick={onClose}>닫기</CloseButton>
      <Roadview
        position={{ lat: position.lat, lng: position.lng, radius: 50, }}
        style={{ width: '100%', height: '100%' }}
      />
    </RoadViewContainer>
  );
};

export default RoadView;

//react-kakao-maps-sdk 에서 제공해주는 Roadview 컴포넌트를 사용하면 위처럼 간단하나 화질이 나쁘다.
//아래처럼 sdk사용없이 kakao.maps 객체를 이용해서 Roadview 객체를 생성하면 코드 품질이 떨어지나 화질이 굿.

// import React, { useEffect, useRef } from 'react';
// import { Roadview } from 'react-kakao-maps-sdk';
// import styled from 'styled-components';

// const { kakao } = window;

// const RoadViewContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 450px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   padding: 5px 10px;
//   cursor: pointer;
//   z-index: 10;
// `;

// const RoadView = ({ position, onClose }) => {
//     const roadviewRef = useRef(null);

//     useEffect(() => {
//         if (roadviewRef.current) {
//             const roadview = new kakao.maps.Roadview(roadviewRef.current);
//             const roadviewClient = new kakao.maps.RoadviewClient();

//             roadviewClient.getNearestPanoId(
//                 new kakao.maps.LatLng(position.lat, position.lng),
//                 50,
//                 (panoId) => {
//                     if (panoId) {
//                         roadview.setPanoId(panoId, new kakao.maps.LatLng(position.lat, position.lng));
//                     } else {
//                         console.error('로드뷰를 사용할 수 없는 위치입니다.');
//                     }
//                 }
//             );
//         }
//     }, [position]);

//     return (
//         <RoadViewContainer>
//             <CloseButton onClick={onClose}>닫기</CloseButton>
//             <div ref={roadviewRef} style={{ width: '100%', height: '100%' }}></div>
//         </RoadViewContainer>
//     );
// };

// export default RoadView;