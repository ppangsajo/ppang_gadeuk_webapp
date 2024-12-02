import ReactDOM from 'react-dom/client';
import React, { useEffect, useState, useRef } from "react";
import RoadView from "./RoadView";
import markerImg from "../../assets/images/BakeryMap/marker2.png";
import CustomOverlayContent from "./CustomOverlayContent";
import currentLocationImg from "../../assets/images/BakeryMap/currentLocation2.png";

const { kakao } = window; // Kakao API 라이브러리를 사용하기 위해 window 객체에서 kakao를 가져옴.


const CustomMap = ({ setPlaces, setCurrentAddress, selectedItem }) => {
    const [roadViewPlace, setRoadViewPlace] = useState(null); // 로드뷰에 표시할 장소 정보를 위한 상태값 
    const [roadViewPosition, setRoadViewPosition] = useState(null);
    //const [pagination, setPagination] = useState(null); // 페이지네이션을 위한 상태값. 검색결과를 더 불러올 수 있도록 함.
    const [currentPosition, setCurrentPosition] = useState(null);
    const mapRef = useRef(null); // map 객체를 참조하기 위한 useRef 훅
    const markersRef = useRef([]); // 마커를 관리하기 위한 useRef 훅
    const currentMarker = useRef(null); // 현재 위치 마커
    const activeOverlayRef = useRef(null); // 현재 활성화된 커스텀 오버레이

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
            //const currentCoordinate = new kakao.maps.LatLng(37.58284829999999, 127.0105811);

            //현 위치 버튼 클릭시 현재 위치로 이동
            const currentCoordinate = new kakao.maps.LatLng(currentLat, currentLng);

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
            //updateAddress(37.58284829999999, 127.0105811);
            updateAddress(currentLat, currentLng);

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
                    distance: place.distance,
                    lat: place.y, // 주번 빵집의 정보를 저장할 때 위도 정보도 추가(사이드바에서 item 선택시 -> 이 위도, 경도 정보를 이용하여 커스텀 오버레이를 표시하기위함)
                    lng: place.x  // 경도 추가
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
                map: mapRef.current,
                position: new kakao.maps.LatLng(place.y, place.x),
                image: markerImage,
                title: place.place_name,
                userData: {
                    ...place,  // place 객체의 모든 속성을 userData에 저장
                    id: place.id  // 장소 ID 추가
                }
            });

            function handleCloseOverlay() {
                //console.log('closeOverlay');
                overlay.setMap(null);
                activeOverlayRef.current = null;
            }

            const openRoadView = () => {
                setRoadViewPosition({
                    lat: place.y,
                    lng: place.x
                });
                setRoadViewPlace(place);
            };
            //kakao.maps.CustomOverlay는 HTML 요소나 HTML 문자열로만 내부 content로 사용할 수 있음.
            // 기존에는 ReactDOMServer.renderToString()을 사용하여 JSX를 문자열로 변환해서 커스텀 오버레이 content로 사용했지만, 이러면 이벤트 핸들러가 동작하지 않음. so, root.render를 통해 React 컴포넌트를 HTML 요소 안에 렌더링한 후, 그 HTML 요소를 content로 설정해줌.

            const overlayContent = document.createElement('div');
            const root = ReactDOM.createRoot(overlayContent);
            root.render(<CustomOverlayContent place={place} closeOverlay={handleCloseOverlay} openRoadView={openRoadView} currentPosition={{ lat: currentPosition.getLat(), lng: currentPosition.getLng() }} />);

            const overlay = new kakao.maps.CustomOverlay({
                content: overlayContent,
                map: mapRef.current,
                position: marker.getPosition()
            });

            overlay.setMap(null);

            kakao.maps.event.addListener(marker, 'mouseover', function () {
                if (activeOverlayRef.current !== overlay) {
                    overlay.setMap(mapRef.current);
                }
            });

            kakao.maps.event.addListener(marker, 'mouseout', function () {
                if (activeOverlayRef.current !== overlay) {
                    overlay.setMap(null);
                }
            });


            kakao.maps.event.addListener(marker, "click", function () {
                overlay.setMap(mapRef.current);
                activeOverlayRef.current = overlay;
            });

            markersRef.current.push(marker);
        }

        searchPlaces();
    }, [currentPosition, setPlaces]);

    useEffect(() => {
        // 선택한 장소&지도객체가 유효한지 + 현재 지도에 마커가 존재하는 경우
        if (selectedItem && mapRef.current && markersRef.current.length > 0) {
            //console.log('selectedItem:', selectedItem);
            const { lat, lng } = selectedItem; // 선택한 장소(item)의 위도와 경도 추출
            const selectedLatLng = new kakao.maps.LatLng(lat, lng);
            mapRef.current.panTo(selectedLatLng); // 선택한 장소로 지도의 중심을 이동

            //console.log('markersRef:', markersRef.current);



            // cpu&메모리는, 실수의 세부적인 값까지는 정확하게 표현하지 못하고 근사값으로 저장하기 때문에(부동소수점 오차) 실제 좌표값과는 미세하게 오차(0.0000000...1)가 존재함. 따라서 실제로는 같은 위치를 나타내는 좌표값이라도 부동소수점 오차 때문에 다른 값으로 인식되기때문에, 좌표값을 === 으로 정확히 일치하는지 비교하려고하면 일치하지않아 false -> 조건문 실행x.
            // so, 이러한 문제를 해결하기 위해 허용 오차(tolerance)를 두어서, 두 좌표값의 위경도 차이가 허용 오차보다 작으면 같은 위치로 간주하도록하여 이 부동소수점 이슈를 해결함. 덕분에 부동소수점 오차를 극복하고 targetMarker를 정확하게 찾을 수 있게 됨.

            //find함수: callback 함수를통해 각 마커의 좌표와 selectedItem의 좌표를 비교하여 좌표값이 일치하는 마커를 찾으면 true를 반환. 이떄, find 함수는 callback 함수가 true를 반환하는 첫 번째 요소를 찾아 반환함. 따라서 find 함수는 selectedItem의 좌표와 일치하는 첫 번째 마커를 찾아 targetMarker 변수에 할당(이를 통해 선택한 장소의 위치와 일치하는 마커를 찾음)

            // 선택한 장소의 좌표값과 일치하는 마커 찾기
            const targetMarker = markersRef.current.find(marker => {
                const markerPosition = marker.getPosition(); // 마커 배열의 각 마커의 좌표값
                //console.log('markerPosition:', markerPosition.getLat(), markerPosition.getLng());
                //console.log('selectedItem position:', lat, lng);
                const latDiff = Math.abs(markerPosition.getLat() - lat); // 선택한 장소의 위도와 해당 마커의 위도 차이계산
                const lngDiff = Math.abs(markerPosition.getLng() - lng);
                const tolerance = 0.00001; // 허용 오차
                return latDiff < tolerance && lngDiff < tolerance;
            });
            // 선택한 장소의 마커를 발견하면, 마치 마커를 클릭한 것과 동일한 효과를 주기 위해 마커 클릭 이벤트를 발생시킴(-> 커스텀 오버레이를 표시)
            if (targetMarker) {
                kakao.maps.event.trigger(targetMarker, 'click');
                console.log('targetMarker:', targetMarker);
            } else {
                console.log('targetMarker is null');
            }
        } else {
            console.log("selectedItem is null");
        }
    }, [selectedItem]); // 사이드바의 빵집item 선택할 때마다 실행

    return (
        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 220px)' }}>
            <div id="customMap" style={{ width: '100%', height: 'calc(100vh - 220px)' }}></div>

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

            {roadViewPosition && (
                <div style={{
                    position: 'absolute',
                    top: '30%',
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