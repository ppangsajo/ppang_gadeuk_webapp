import React, { useEffect } from 'react';
import Map from '../components/KakaoMap/Map';

function BakeryMap() {
    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div>
            <h1>Bakery Map</h1>
            <Map />
        </div>
    );
}

export default BakeryMap;