import React, { useEffect } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';
import styled from 'styled-components';

const MapDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 45px;
`;

function BakeryMap() {
    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <MapDiv>
            <SideBar width={350} />
            <Map />
        </MapDiv>
    );
}

export default BakeryMap;