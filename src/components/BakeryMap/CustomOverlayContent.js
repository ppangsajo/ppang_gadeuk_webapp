import React from 'react';
import { Wrap, Info, Title, Close, Body, Desc, Ellipsis, Jibun, Img, Link, InfoAfter } from '../../styles/BakeryMap/CustomOverlayStyles';
import thumbnailImg from '../../assets/images/BakeryMap/marker.png';
// 커스텀 오버레이 내부의 컨텐츠들 정의//
const CustomOverlayContent = ({ place, closeOverlay, openRoadView, currentPosition }) => {
    const findRoadUrl = `https://map.kakao.com/link/to/${place.place_name},${place.y},${place.x}`;
    const detailPlaceUrl = `https://place.map.kakao.com/${place.id}`;
    return (
        <Wrap>
            <Info>
                <Title>
                    {place.place_name}
                    <Close onClick={closeOverlay} title="닫기" />
                </Title>
                <Body>
                    <Img>
                        <img src={thumbnailImg} width="73" height="70" alt="thumbnail" />
                    </Img>
                    <Desc>
                        <Ellipsis>{place.address_name}</Ellipsis>
                        <Jibun>전화번호: {place.phone}</Jibun>
                        <Jibun>{place.distance}m</Jibun>
                        <findRoadiv>
                            <Link href={detailPlaceUrl} target="_blank">상세정보</Link>
                            <button onClick={openRoadView} style={{ marginLeft: '10px' }}>로드뷰</button>
                            <Link href={findRoadUrl} target="_blank">길찾기</Link>
                        </findRoadiv>
                    </Desc>
                </Body>
            </Info>
            <InfoAfter />
        </Wrap>
    );
};

export default CustomOverlayContent;