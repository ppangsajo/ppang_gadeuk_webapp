import React, { useEffect, useState } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';
import styled from 'styled-components';

const DIV = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 45px;
`;

function BakeryMap() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <DIV>
            <SideBar width={350} places={places} />
            <Map setPlaces={setPlaces} />
        </DIV>
    );
}

export default BakeryMap;