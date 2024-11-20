import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {
    useEffect(() => {
        const container = document.getElementById('kakaoMap'); // 지도를 담을 영역의 DOM 객체 레퍼런스
        const lat = 37.58284829999999; // 위도
        const lng = 127.0105811; // 경도
        const options = {
            center: new kakao.maps.LatLng(lat, lng), // 설정해둔 위도와 경도를 중심점으로 map 위치설정됨.
            level: 4 // map 확대 수준(high=wide)
        };

        const map = new kakao.maps.Map(container, options);
        //kakao.maps.Map: 지도 객체를 생성해주는 메서드. 매개변수로, 지도를 표시할 컨테이너와 중심 좌표, 확대 수준 등을 설정가능.

        const ps = new kakao.maps.services.Places();
        // 장소 검색 객체 ps 생성. 카카오 맵 API의 Places 서비스 객체로, 장소 검색과 관련된 여러 기능을 제공해줌. 

        const currentPosition = new kakao.maps.LatLng(lat, lng);
        ps.keywordSearch("베이커리", placesSearchCB, {
            location: currentPosition,
            radius: 1000
        });

        // let currentInfowindow = null;

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
            }
        }

        function displayMarker(place) {
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            });

            const infowindow = new kakao.maps.InfoWindow({
                content: '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>',
                zIndex: 1
            });

            kakao.maps.event.addListener(marker, "mouseover", function () {
                infowindow.open(map, marker);
            });

            kakao.maps.event.addListener(marker, "mouseout", function () {
                infowindow.close();
            });
        }
    }, []);

    return (
        <div id="kakaoMap" style={{ width: '100%', height: '700px' }}></div>
    );
}

export default Map;