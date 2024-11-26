import React from 'react';
import styled from 'styled-components';

const ZoomControlContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 11.2px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f   
5;
  border: 1px solid #919191;
  border-radius: 5px;
`;

const ZoomButton = styled.span`
  display: block;
  width: 36px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: white;

  & img {
    width: 15px;
    height: 15px;
    padding: 12px 0;
    border: none;
  }

  &:first-child {
    border-bottom: 1px solid #bfbfbf;
  }
`;

const ZoomControlBtn = ({ onZoomIn, onZoomOut }) => {
  return (
    <ZoomControlContainer>
      <ZoomButton onClick={onZoomIn}>
        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
      </ZoomButton>
      <ZoomButton onClick={onZoomOut}>
        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
      </ZoomButton>
    </ZoomControlContainer>
  );
};

export default ZoomControlBtn;