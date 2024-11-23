import React from 'react';
import { Wrap, Info, Title, Close, Body, Desc, Ellipsis, Jibun, Img, Link, InfoAfter } from '../../styles/BakeryMap/CustomOverlayStyles';

// 커스텀 오버레이 내부의 컨텐츠들 정의//
const CustomOverlayContent = ({ place, closeOverlay }) => {
    return (
        <Wrap>
            <Info>
                <Title>
                    {place.place_name}
                    <Close onClick={closeOverlay} title="닫기" />
                </Title>
                <Body>
                    <Img>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70" alt="thumbnail" />
                    </Img>
                    <Desc>
                        <Ellipsis>{place.address_name}</Ellipsis>
                        <Jibun>전화번호: {place.phone}</Jibun>
                        <Jibun>{place.distance}m</Jibun>
                        <Link href="https://www.kakaocorp.com/main" target="_blank">홈페이지</Link>
                    </Desc>
                </Body>
            </Info>
            <InfoAfter />
        </Wrap>
    );
};

export default CustomOverlayContent;