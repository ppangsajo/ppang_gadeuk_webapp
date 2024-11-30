
import React from 'react';
import { Wrap, Info, Title, Close, Body, Desc, Address, Tel, Distance, Img, ButtonWrapper, Button, InfoAfter } from '../../styles/BakeryMap/CustomOverlayStyles';
import thumbnailImg from '../../assets/images/BakeryMap/marker.png';

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
                        <Address>{place.address_name}</Address>
                        <Tel>전화번호: {place.phone}</Tel>
                        <Distance>{place.distance}m</Distance>
                    </Desc>
                    <ButtonWrapper>
                        <Button href={detailPlaceUrl} target="_blank">상세정보</Button>
                        <Button onClick={openRoadView}>로드뷰</Button>
                        <Button href={findRoadUrl} target="_blank">길찾기</Button>
                    </ButtonWrapper>
                </Body>
            </Info>
            <InfoAfter />
        </Wrap>
    );
};

export default CustomOverlayContent;