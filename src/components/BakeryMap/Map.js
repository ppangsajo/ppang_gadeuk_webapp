import React, { useEffect, useState, useCallback, useRef } from "react";
import RoadView from "./RoadView";
import markerImg from "../../assets/images/BakeryMap/marker2.png";
import CustomOverlayContent from "./CustomOverlayContent";
import ReactDOMServer from 'react-dom/server';

const { kakao } = window; //Kakao API 라이브러리를 사용하기 위해 window객체에서 kakao를 가져옴.

const CustomMap = ({ setPlaces }) => {
    const [roadViewPosition, setRoadViewPosition] = useState(null);
    const [pagination, setPagination] = useState(null); // 페이지네이션을 위한 상태값. 검색결과를 더 불러올 수 있도록 함.
    const [currentPosition, setCurrentPosition] = useState(null);
    const mapRef = useRef(null); // map 객체를 참조하기 위한 useRef 훅

    const updatePlaces = useCallback((newPlaces) => {
        setPlaces(prevPlaces => [...prevPlaces, ...newPlaces]); // 사용자의 위치가 바뀔때마다 해당 좌표값에 대한 새로운 장소 데이터들로 갱신
    }, [setPlaces]);

    useEffect(() => {
        const container = document.getElementById('customMap'); // 지도를 담을 영역의 DOM 객체 레퍼런스
        const lat = 37.58284829999999; // 위도 <한성대>
        const lng = 127.0105811; // 경도
        // const lat = 37.5443878; // 위도  <서울숲>
        // const lng = 127.0374424; // 경도
        const options = {
            center: new kakao.maps.LatLng(lat, lng), // 설정해둔 위도와 경도를 중심점으로 map 위치설정됨.
            level: 3 // map 확대 수준(high=wide) default: 4
        };

        const map = new kakao.maps.Map(container, options); //지도 객체 생성.
        mapRef.current = map; // map 객체를 useRef 훅에 저장

        // HTML5 Geolocation API를 통해 현재 위치 가져옴
        navigator.geolocation.getCurrentPosition((position) => {
            const currentLat = position.coords.latitude;
            const currentLng = position.coords.longitude;
            const currentCoordinate = new kakao.maps.LatLng(currentLat, currentLng); // 현재 위치 좌표 객체 생성

            // 현재 위치에 마커 표시
            new kakao.maps.Marker({
                map: map,
                position: currentCoordinate,
                title: "현재 위치"
            });

            // 현재 위치를 중심으로 지도를 이동
            map.setCenter(currentCoordinate);

            // 현재 위치 상태 업데이트
            setCurrentPosition(currentCoordinate);
        });

    }, []);

    useEffect(() => {
        async function searchPlaces() {
            if (!currentPosition) return;

            // 새로운 위치 좌표에 대한 장소 데이터를 추가하기 전에 이전 장소 데이터를 초기화
            setPlaces([]);

            const keyword = "베이커리";
            const options = {
                location: currentPosition,
                radius: 1000,
                sort: kakao.maps.services.SortBy.DISTANCE,
            };

            const ps = new kakao.maps.services.Places();
            ps.keywordSearch(keyword, placesSearchCB, options);
        }

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                console.log(`주변 빵집 검색결과 개수: ${data.length}`);
                updatePlaces(data); // 검색 결과를 상태로 업데이트. 즉, 사용자가 움직이면서 변경된 현재 위치를 기준으로 검색한 장소 데이터를 업데이트.
                setPagination(pagination);
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
            } else {
                console.error('주변 빵집이 없습니다.');
            }
        }

        function displayMarker(place) {
            const imageSrc = markerImg;
            const imageSize = new kakao.maps.Size(34, 45);
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            const marker = new kakao.maps.Marker({
                map: mapRef.current, // map 객체를 useRef 훅에서 가져옴
                position: new kakao.maps.LatLng(place.y, place.x),
                image: markerImage
            });

            const content = ReactDOMServer.renderToString(
                <CustomOverlayContent place={place} closeOverlay={closeOverlay} />
            );

            const overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: mapRef.current, // map 객체를 useRef 훅에서 가져옴
                position: marker.getPosition()
            });

            overlay.setMap(null);

            kakao.maps.event.addListener(marker, 'mouseover', function () {
                overlay.setMap(mapRef.current); // map 객체를 useRef 훅에서 가져옴
            });

            kakao.maps.event.addListener(marker, 'mouseout', function () {
                overlay.setMap(null);
            });

            function closeOverlay() {
                overlay.setMap(null);
            }

            kakao.maps.event.addListener(marker, "click", function () {
                setRoadViewPosition({
                    lat: place.y,
                    lng: place.x,
                });
            });
        }

        searchPlaces();
    }, [currentPosition, updatePlaces]);

    useEffect(() => {
        if (pagination && pagination.hasNextPage) {
            pagination.nextPage();
        }
    }, [pagination]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '700px' }}>
            <div id="customMap" style={{ width: '100%', height: '100%' }}></div>
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

export default CustomMap;