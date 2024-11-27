import React, { useState } from 'react';
import styled from 'styled-components';

const MapTypeControlContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 60px; 
  z-index: 20;
  display: flex;
  gap: 5px;
`;

const MapTypeButton = styled.button`
  width: 65px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#425470' : '#fff')};
  background: ${({ selected }) => (selected ? 'linear-gradient(#425470, #5b6d8a)' : 'linear-gradient(#fff, #e6e6e6)')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border: 1px solid #919191;
  border-radius: 5px;
  font-size: 12px;
  font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;

  &:hover {
    background: ${({ selected }) => (selected ? 'linear-gradient(#425470, #5b6d8a)' : 'linear-gradient(#f5f5f5, #e3e3e3)')};
  }

  &:active {
    background: ${({ selected }) => (selected ? 'linear-gradient(#425470, #5b6d8a)' : 'linear-gradient(#e6e6e6, #fff)')};
  }
`;

const MapTypeControlBtn = ({ setMapType }) => {
  const [selectedType, setSelectedType] = useState('roadmap');

  const mapTypeChangeHandler = (mapType) => {
    setSelectedType(mapType);
    setMapType(mapType);
  };

  return (
    <MapTypeControlContainer>
      <MapTypeButton selected={selectedType === 'roadmap'} onClick={() => mapTypeChangeHandler('roadmap')}>지도</MapTypeButton>
      <MapTypeButton selected={selectedType === 'skyview'} onClick={() => mapTypeChangeHandler('skyview')}>스카이뷰</MapTypeButton>
    </MapTypeControlContainer>
  );
};

export default MapTypeControlBtn;