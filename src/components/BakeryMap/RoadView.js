// import React from 'react';
// import { Roadview } from 'react-kakao-maps-sdk';
// import { RoadViewContainer, CloseButton } from "../../styles/BakeryMap/RoadViewStyles";

// const RoadView = ({ position, onClose }) => {
//   return (
//     <RoadViewContainer>
//       <CloseButton onClick={onClose}>닫기</CloseButton>
//       <Roadview
//         position={{ lat: position.lat, lng: position.lng, radius: 50, }}
//         style={{ width: '100%', height: '100%' }}
//       />
//     </RoadViewContainer>
//   );
// };

// export default RoadView;

//react-kakao-maps-sdk 에서 제공해주는 Roadview 컴포넌트를 사용하면 위처럼 간단하나 화질이 나쁘다.
//아래처럼 sdk사용없이 kakao.maps 객체를 이용해서 Roadview 객체를 생성하면 코드 품질이 떨어지나 화질이 굿.

import React, { useEffect, useRef } from 'react';
import { RoadViewContainer, CloseButton } from "../../styles/BakeryMap/RoadViewStyles";
const { kakao } = window;


const RoadView = ({ position, onClose }) => {
  const roadviewRef = useRef(null);

  useEffect(() => {
    if (roadviewRef.current) {
      const roadview = new kakao.maps.Roadview(roadviewRef.current);
      const roadviewClient = new kakao.maps.RoadviewClient();

      roadviewClient.getNearestPanoId(
        new kakao.maps.LatLng(position.lat, position.lng),
        50,
        (panoId) => {
          if (panoId) {
            roadview.setPanoId(panoId, new kakao.maps.LatLng(position.lat, position.lng));
          } else {
            console.error('로드뷰를 사용할 수 없는 위치입니다.');
          }
        }
      );
    }
  }, [position]);

  return (
    <RoadViewContainer>
      <CloseButton onClick={onClose}>닫기</CloseButton>
      <div ref={roadviewRef} style={{ width: '100%', height: '100%' }}></div>
    </RoadViewContainer>
  );
};

export default RoadView;