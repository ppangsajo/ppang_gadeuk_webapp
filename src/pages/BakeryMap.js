import React, { useEffect } from 'react';
import Map from '../components/BakeryMap/Map';

function BakeryMap() {
    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div>
            <Map />
        </div>
    );
}

export default BakeryMap;