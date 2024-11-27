import React, { useEffect, useState, useCallback, useRef } from "react";
import RoadView from "./RoadView";
import markerImg from "../../assets/images/BakeryMap/marker2.png";
import CustomOverlayContent from "./CustomOverlayContent";
import ReactDOMServer from 'react-dom/server';

const { kakao } = window; // Kakao API 라이브러리를 사용하기 위해 window 객체에서 kakao를 가져옴.

const CustomMap = ({ setPlaces }) => {
    const [roadViewPlace, setRoadViewPlace] = useState(null); // 로드뷰에 표시할 장소 정보를 위한 상태값 
    const [roadViewPosition, setRoadViewPosition] = useState(null);
    const [pagination, setPagination] = useState(null); // 페이지네이션을 위한 상태값. 검색결과를 더 불러올 수 있도록 함.
    const [currentPosition, setCurrentPosition] = useState(null);
    const mapRef = useRef(null); // map 객체를 참조하기 위한 useRef 훅
    const markersRef = useRef([]); // 마커를 관리하기 위한 useRef 훅

    // const updatePlaces = useCallback(() => {
    //     const newPlaces = markersRef.current.map(marker => ({
    //         place_name: marker.getTitle(),
    //         address_name: marker.getPosition().toString(),
    //         distance: "unknown", // 거리 정보
    //     }));
    //     setPlaces(newPlaces);
    // }, [setPlaces]);

    useEffect(() => {
        const container = document.getElementById('customMap'); // 지도를 담을 영역의 DOM 객체 레퍼런스
        const lat = 37.58284829999999; // 위도 <한성대>
        const lng = 127.0105811; // 경도
        const options = {
            center: new kakao.maps.LatLng(lat, lng), // 설정해둔 위도와 경도를 중심점으로 map 위치설정됨.
            level: 3 // map 확대 수준(high=wide) default: 4
        };

        const map = new kakao.maps.Map(container, options); // 지도 객체 생성.
        mapRef.current = map; // map 객체를 useRef 훅에 저장
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;

        navigator.geolocation.getCurrentPosition((position) => {
            const currentLat = position.coords.latitude;
            const currentLng = position.coords.longitude;
            const currentCoordinate = new kakao.maps.LatLng(currentLat, currentLng); // 현재 위치 좌표 객체 생성

            // 현재 위치에 마커 표시
            new kakao.maps.Marker({
                map: mapRef.current,
                position: currentCoordinate,
                title: "현재 위치",
                zIndex: 10 // zIndex를 높게 설정하여 우선순위 높임
            });

            // 현재 위치를 중심으로 지도를 이동
            mapRef.current.setCenter(currentCoordinate);

            // 현재 위치 상태 업데이트
            setCurrentPosition(currentCoordinate);
        }, showErrorMsg, {
            enableHighAccuracy: true, // 위치 정확도 향상 요청
            maximumAge: 30000, // 30초 이내의 캐시된 위치 정보 사용
            timeout: 27000 // 27초 이내에 위치 정보를 가져오지 못하면 에러 반환
        });

    }, [mapRef.current]);

    function showErrorMsg(error) {
        console.error(error.message);
    }

    useEffect(() => {
        async function searchPlaces() {
            if (!currentPosition) return;

            // 새로운 위치 좌표에 대한 장소 데이터를 추가하기 전에 이전 장소 데이터를 초기화
            setPlaces([]);
            markersRef.current.forEach(marker => marker.setMap(null)); // 이전 마커 제거
            markersRef.current = []; // 마커 배열 초기화

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
                const newPlaces = data.map(place => ({
                    place_name: place.place_name,
                    address_name: place.address_name,
                    distance: place.distance
                }));
                setPlaces(prevPlaces => [...prevPlaces, ...newPlaces]); // 페이지네이션- 여러 페이지들 + 되도록, 기존 데이터에 새로운 데이터 추가
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
                setPagination(pagination);
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
                image: markerImage,
                title: place.place_name
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
                setRoadViewPlace(place); // 로드뷰에 커스텀 오버레이에 표시해줄 장소 정보값 업데이트
            });

            markersRef.current.push(marker); // 마커 배열에 추가
        }

        searchPlaces();
    }, [currentPosition]);

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
                        place={roadViewPlace} // 로드뷰의 커스텀 오버레이에 표시해줄 장소들 정보 전달
                        onClose={() => setRoadViewPosition(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default CustomMap;