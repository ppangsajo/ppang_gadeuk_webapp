import React, { useEffect, useState, useRef } from "react";
import RoadView from "./RoadView";
import markerImg from "../../assets/images/BakeryMap/marker2.png";
import CustomOverlayContent from "./CustomOverlayContent";
import ReactDOMServer from 'react-dom/server';
import currentLocationImg from "../../assets/images/BakeryMap/currentLocation2.png";
//import ZoomControlBtn from './ZoomControlBtn';
//import MapTypeControlBtn from './MapTypeControlBtn';

const { kakao } = window; // Kakao API 라이브러리를 사용하기 위해 window 객체에서 kakao를 가져옴.


const CustomMap = ({ setPlaces, setCurrentAddress }) => {
    const [roadViewPlace, setRoadViewPlace] = useState(null); // 로드뷰에 표시할 장소 정보를 위한 상태값 
    const [roadViewPosition, setRoadViewPosition] = useState(null);
    //const [pagination, setPagination] = useState(null); // 페이지네이션을 위한 상태값. 검색결과를 더 불러올 수 있도록 함.
    const [currentPosition, setCurrentPosition] = useState(null);
    const mapRef = useRef(null); // map 객체를 참조하기 위한 useRef 훅
    const markersRef = useRef([]); // 마커를 관리하기 위한 useRef 훅
    const currentMarker = useRef(null); // 현재 위치 마커

    //  geocoder객체의 coord2Address 메서드를통해 현재 좌표값을 상세주소로 변환
    const updateAddress = (currentLat, currentLng) => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2Address(currentLng, currentLat, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                setCurrentAddress(address);
            }
        });
    };

    // 현위치버튼의 클릭 이벤트 핸들러. 현재 위치로 이동&현재 위치에 마커 표시
    const currentLocationHandler = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const currentLat = position.coords.latitude;
            const currentLng = position.coords.longitude;

            //현 위치 버튼 클릭시 현재 위치로 이동, 이지만 현재 위치를 한성대로 설정해둠(이동되는지 테스트용)!!! 시연시, 변경 필수
            const currentCoordinate = new kakao.maps.LatLng(37.58284829999999, 127.0105811);

            //현 위치 버튼 클릭시 현재 위치로 이동
            //const currentCoordinate = new kakao.maps.LatLng(currentLat, currentLng);

            // 이전 마커 제거
            if (currentMarker.current) {
                currentMarker.current.setMap(null);
            }
            // 현재 위치에 마커 표시
            currentMarker.current = new kakao.maps.Marker({
                map: mapRef.current,
                position: currentCoordinate,
                title: "현재 위치",
                zIndex: 10
            });

            // 현재 위치를 중심으로 부드럽게 지도 이동
            mapRef.current.panTo(currentCoordinate);

            // 현재 위치 상태 업데이트
            setCurrentPosition(currentCoordinate);

            // 현재 위치에 대한 주소값 update이지만, 한성대로 설정해둠(테스트용)
            //!!! 시연시, 변경 필수
            updateAddress(37.58284829999999, 127.0105811);
            //updateAddress(currentLat, currentLng);

        }, showErrorMsg, {
            enableHighAccuracy: true, // 위치 정확도 향상 요청
            maximumAge: 30000, // 30초 이내의 캐시된 위치 정보 사용
            timeout: 27000 // 27초 이내에 위치 정보를 가져오지 못하면 에러 반환
        });
    };


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
            currentMarker.current = new kakao.maps.Marker({
                map: mapRef.current,
                position: currentCoordinate,
                title: "현재 위치",
                zIndex: 10 // zIndex를 높게 설정하여 우선순위 높임
            });

            // 현재 위치를 중심으로 지도를 이동
            mapRef.current.setCenter(currentCoordinate);

            // 현재 위치 상태 업데이트
            setCurrentPosition(currentCoordinate);

            // 현재 위치의 주소를 가져와서 업데이트
            updateAddress(currentLat, currentLng);

        }, showErrorMsg, {
            enableHighAccuracy: true, // 위치 정확도 향상 요청
            maximumAge: 30000, // 30초 이내의 캐시된 위치 정보 사용
            timeout: 27000 // 27초 이내에 위치 정보를 가져오지 못하면 에러 반환
        });

        // 카카오에서 기본으로 제공하는 지도타입 컨트롤 추가
        const mapTypeControl = new kakao.maps.MapTypeControl();
        mapRef.current.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 카카오에서 기본으로 제공하는 지도 확대 축소 컨트롤 추가
        const zoomControl = new kakao.maps.ZoomControl();
        mapRef.current.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }, []);

    function showErrorMsg(error) {
        console.error(error.message);
    }

    useEffect(() => {
        let placesData = []; // 페이지네이션된 모든 장소 데이터를 저장할 배열

        const searchPlaces = () => {
            if (!currentPosition) return;

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
                placesData = [...placesData, ...data]; // 새로운 데이터를 누적
                console.log(`주변 빵집 검색결과 개수: ${data.length}`);
                setPlaces(placesData.map(place => ({  // placesData를 사용하여 setPlaces 호출
                    place_name: place.place_name,
                    address_name: place.address_name,
                    distance: place.distance
                })));
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
                if (pagination && pagination.hasNextPage) {
                    pagination.nextPage();
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
    }, [currentPosition, setPlaces]);

    /*
        // 확대/축소 버튼 이벤트 핸들러
        const handleZoomIn = () => {
            mapRef.current.setLevel(mapRef.current.getLevel() - 1);
        };
    
        const handleZoomOut = () => {
            mapRef.current.setLevel(mapRef.current.getLevel() + 1);
        };
    
        // 지도 타입 변경 버튼 이벤트 핸들러
        const setMapType = (maptype) => {
            if (maptype === 'roadmap') {
                //카카오맵 api에서 제공하는 내장 MapTypeId 지도타입 상수값 사용
                //MapTypeId.ROADMAP: 현재 카카오맵 타입을 일반지도 형태로 표현
                mapRef.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            }
            //MapTypeId.SKYVIEW: 현재 카카오맵 타입을 스카이뷰 형태로 표현
            if (maptype === 'skyview') {
                mapRef.current.setMapTypeId(kakao.maps.MapTypeId.SKYVIEW);
            }
        };
    */

    return (
        <div style={{ position: 'relative', width: '100%', height: '700px' }}>
            <div id="customMap" style={{ width: '100%', height: '100%' }}></div>

            <button
                onClick={currentLocationHandler}
                style={{
                    position: 'absolute',
                    top: '2px',
                    right: '125px',
                    zIndex: 20,
                    padding: '10px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgb(211, 211, 211)',
                    backgroundImage: `url(${currentLocationImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer'
                }}
            >
                <span style={{ display: 'none' }}>현재 위치로 이동</span>
            </button>

            {/* 지도타입 컨트롤 */}
            {/*<MapTypeControlBtn setMapType={setMapType} />*/}

            {/* 확대/축소 버튼 */}
            {/* <ZoomControlBtn onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />*/}

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
                        place={roadViewPlace}
                        onClose={() => setRoadViewPosition(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default CustomMap;