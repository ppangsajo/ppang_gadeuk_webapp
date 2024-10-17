import React, { useEffect } from "react";

// 현재 브라우저 창과 관련된 모든 정보 및 기능을 포함하고 있는 브라우저 글로벌 객체인 window 객체로부터 객체구조분해할당을 통해 kakao 객체를 추출. 

//이 kakao객체를 이용하여 카카오 맵 API의 다양한 기능에 접근할 수 있다! 

//kakao.maps는 kakao 객체의 일부로, 카카오 맵 API와 관련된 모든 기능을 포함하는 네임스페이스로, 카카오 맵 관련 모든 기능을 제공해주기때문에, 여기서 마커, 지도, 장소 검색 등의 기능을 사용하면 됨!
const { kakao } = window;

function KakaoMap() {
    useEffect(() => {
        const container = document.getElementById('kakaoMap'); // 지도를 담을 영역의 DOM 객체 레퍼런스


        const lat = 37.58284829999999; // 위도
        const lng = 127.0105811; // 경도
        const options = {
            center: new kakao.maps.LatLng(lat, lng), // // 설정해둔 위도와 경도를 중심점으로 map 위치설정됨.
            level: 4 // map 확대 수준(high=wide)
        };

        //kakao.maps.Map: 지도 객체를 생성해주는 메서드. 매개변수로, 지도를 표시할 컨테이너와 중심 좌표, 확대 수준 등을 설정가능.
        const map = new kakao.maps.Map(container, options);
        // 지도 생성 후 지도 객체 반환.


        // 장소 검색 객체 ps 생성
        //kakao.maps.services.Places()는 카카오 맵 API의 장소 검색 서비스를 위한 객체를 생성해주는 메서드.
        //kakao.maps.services.Places의 반환값인 ps 객체는 카카오 맵 API의 Places 서비스 객체로, 장소 검색과 관련된 여러 기능을 제공해줌. 
        const ps = new kakao.maps.services.Places();

        // 설정해둔 위치를 기준으로 "베이커리" 키위드 검색 by 
        //placesSearchCB는 해당 키워드에 대한 장소 검색 결과를 처리하는 콜백 함수로, 검색이 완료되면 이 함수가 호출됨.
        const currentPosition = new kakao.maps.LatLng(lat, lng);
        ps.keywordSearch("베이커리", placesSearchCB, {
            location: currentPosition,
            radius: 1000 // 현재 설정 위치 기준 1000미터 반경 탐색.
        });

        let currentInfowindow = null; // 현재 열려 있는 정보 창을 저장하는 변수

        // 키워드 검색 완료 시 호출되는 콜백함수 placesSearchCB.

        //data: 검색 결과로 반환된 장소의 배열입니다. 각 장소는 객체 형태로, 위치 정보, 이름, 주소 등 다양한 속성을 포함

        //status: 검색 요청의 상태를 나타내는 값

        //(kakao.maps.services.Status.OK 값은 요청이 성공적임을 나타냄, else=에러)

        //pagination: 검색 결과의 페이지 정보. 여러 페이지에 걸쳐 결과가 나올 경우 사용됨

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (var i = 0; i < data.length; i++) {
                    displayMarker(data[i]);//검색된 각각의 장소에 대해 displayMarker 함수를 호출하여 카카오맵의 해당 장소에 마커를 표시. data[i]에는 검색된 각 장소의 정보가 담겨있음.
                }
            } else {//kakao.maps.services.Status.OK 이외의 값 = 에러
                console.error("장소 검색에 실패하였습니다.", status);
            }
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
            //kakao.maps.Marker=카카오 맵 API에서 제공하는 마커 객체
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, "click", function () {
                // 현재 열려 있는 정보 창이 있으면 닫습니다
                if (currentInfowindow) {
                    currentInfowindow.close();
                }

                //kakao.maps.InfoWindow: 마커 클릭 시 나타나는 정보 창을 생성하는 객체
                const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
                infowindow.setContent(
                    '<div style="padding:5px;font-size:12px;">' +
                    place.place_name +
                    "</div>"
                );
                infowindow.open(map, marker);

                // 현재 열려 있는 정보 창을 업데이트합니다
                currentInfowindow = infowindow;
            });
        }
    }, []); // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행

    return (
        /*상위 div에서 너비max =1200px로 설정함.so, 100%=1200px*/
        <div id="kakaoMap" style={{ width: '100%', height: '700px' }}></div>
    );
}

export default KakaoMap;
