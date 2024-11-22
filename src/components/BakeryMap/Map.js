import React, { useEffect, useState } from "react";
import RoadView from "./RoadView";
import markerImg from "../../assets/images/BakeryMap/marker2.png";
import CustomOverlayContent from "./CustomOverlayContent";
import ReactDOMServer from 'react-dom/server';

const { kakao } = window;

const Map = ({ setPlaces }) => {

    const [roadViewPosition, setRoadViewPosition] = useState(null);

    useEffect(() => {
        const container = document.getElementById('kakaoMap'); // 지도를 담을 영역의 DOM 객체 레퍼런스
        const lat = 37.5443878; // 위도
        const lng = 127.0374424; // 경도
        const options = {
            center: new kakao.maps.LatLng(lat, lng), // 설정해둔 위도와 경도를 중심점으로 map 위치설정됨.
            level: 4 // map 확대 수준(high=wide)
        };

        const map = new kakao.maps.Map(container, options); //지도 객체 생성.
        //kakao.maps.Map: 지도 객체를 생성해주는 메서드. 매개변수로, 지도를 표시할 컨테이너와 중심 좌표, 확대 수준 등을 설정가능.


        //new kakao.maps.LatLng(lat, lng) 해당 좌표값으로 좌표객체 생성.
        async function searchPlaces() {
            var keyword = "베이커리"; //검색할 키워드
            const currentCoordinate = new kakao.maps.LatLng(lat, lng);
            var options = {
                location: currentCoordinate,
                radius: 1000,
                sort: kakao.maps.services.SortBy.DISTANCE,
            };

            const ps = new kakao.maps.services.Places();
            ps.keywordSearch(keyword, placesSearchCB, options);
        }
        // 장소 검색 객체 ps 생성. 카카오 맵 API의 Places 서비스 객체로, 장소 검색과 관련된 여러 기능을 제공해줌. 
        //ps.keywordSearch: 키워드 검색을 요청하는 메서드. 매개변수로 검색할 키워드, 검색결과를 인자값으로받고 실행되는 콜백함수, 추가 옵션을 전달받음.


        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                setPlaces(data);
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]); //베이커리 카테고리에 해당하는 1000반경 이내에서 검색된 장소 데이터를 마커표시 함수에 전달.
                }
            }
        }

        function displayMarker(place) {
            const imageSrc = markerImg; // 마커 이미지 path
            const imageSize = new kakao.maps.Size(34, 45); // 마커 이미지 크기
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 이미지 객체
            const marker = new kakao.maps.Marker({ // 마커 객체 생성.
                map: map, //현재 지도에 표시할 것.
                position: new kakao.maps.LatLng(place.y, place.x), //파라미터로 받은 빵집의 위도와 경도로 -> 마커의 위치를 설정.
                image: markerImage // 마커 이미지 설정
            });


            // ReactDOMServer.renderToString을 사용하는 이유: Kakao Maps API의 CustomOverlay는 HTML 문자열을 content로 받기 때문에,
            // React 컴포넌트, 즉 JSX문법을 -> 문자열로 변환하여 전달해야 하기때문. ReactDOMServer.renderToString가 JSX문법을 문자열로 변환해줌.
            const content = ReactDOMServer.renderToString(
                <CustomOverlayContent place={place} closeOverlay={closeOverlay} />
            );

            // 마커 위에 커스텀오버레이 표시
            var overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition()
            });

            // 초기에는 커스텀 오버레이 숨김
            closeOverlay();

            // 마커에 마우스를 올렸을 때 커스텀 오버레이를 표시
            kakao.maps.event.addListener(marker, 'mouseover', function () {
                overlay.setMap(map);
            });

            // 마커에서 마우스를 뗐을 때 커스텀 오버레이를 숨김
            kakao.maps.event.addListener(marker, 'mouseout', function () {
                overlay.setMap(null);
            });

            // 커스텀 오버레이 닫아주는 함수
            function closeOverlay() {
                overlay.setMap(null);
            }

            // 마커 클릭시 로드뷰.
            kakao.maps.event.addListener(marker, "click", function () {
                setRoadViewPosition({
                    lat: place.y, //위도
                    lng: place.x, //경도
                });
            });
        }

        searchPlaces();
    }, [setPlaces]);

    //지도 렌더링
    return (
        <div style={{ position: 'relative', width: '100%', height: '700px' }}>
            <div id="kakaoMap" style={{ width: '100%', height: '100%' }}></div>
            {roadViewPosition && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '50%',
                    height: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                }}>
                    <RoadView
                        position={roadViewPosition}
                        onClose={() => setRoadViewPosition(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default Map;