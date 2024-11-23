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
import ReactDOMServer from 'react-dom/server';
import RoadViewOverlayContent from "./RoadViewOverlayContent";

const { kakao } = window;


const RoadView = ({ position, onClose, place }) => {
  const roadviewRef = useRef(null); // Roadview를 렌더링할 DOM 요소를 참조하기 위한 useRef 훅

  useEffect(() => {
    if (roadviewRef.current) {  // roadviewRef가 현재 DOM 요소를 참조하고 있는지 확인
      const roadview = new kakao.maps.Roadview(roadviewRef.current); // Roadview 객체 생성
      const roadviewClient = new kakao.maps.RoadviewClient(); // //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄움
      roadviewClient.getNearestPanoId(
        new kakao.maps.LatLng(position.lat, position.lng),
        50, // 반경 50미터 내에서 가장 가까운 파노라마 ID를 검색
        (panoId) => {
          if (panoId) {
            roadview.setPanoId(panoId, new kakao.maps.LatLng(position.lat, position.lng)); // 해당 파노라마 ID와 위치로 로드뷰를 실행
          } else {
            console.error('로드뷰를 사용할 수 없는 위치입니다.');
          }
        }
      );

      kakao.maps.event.addListener(roadview, 'init', function () {
        const content = ReactDOMServer.renderToString(
          <RoadViewOverlayContent place={place} />
        );

        // 커스텀 오버레이 생성
        const rvCustomOverlay = new kakao.maps.CustomOverlay({
          position: new kakao.maps.LatLng(position.lat, position.lng),
          content: content,
          xAnchor: 0.5, // 커스텀 오버레이의 x축 위치. 1에 가까울수록 왼쪽에 위치. default=0.5
          yAnchor: 0.5 // 커스텀 오버레이의 y축 위치. 1에 가까울수록 위쪽에 위치. default=0.5
        });

        rvCustomOverlay.setMap(roadview);

        const projection = roadview.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체

        // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출.
        const viewpoint = projection.viewpointFromCoords(rvCustomOverlay.getPosition(), rvCustomOverlay.getAltitude());

        roadview.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록 로드뷰의 시점을 변화 시키기
      });
    }
  }, [position, place]); // 위치 변경될 때마다 useEffect 훅 실행

  return (
    <RoadViewContainer>
      <CloseButton onClick={onClose}>닫기</CloseButton>
      <div ref={roadviewRef} style={{ width: '100%', height: '100%' }}></div>
    </RoadViewContainer>
  );
};

export default RoadView;