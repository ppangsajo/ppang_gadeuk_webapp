import React, { useEffect } from 'react';
import Map from '../components/BakeryMap/Map';
import SideBar from '../components/BakeryMap/SideBar';

function BakeryMap() {
    useEffect(() => {
        document.body.className = 'body-Map';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div>
            <SideBar width={350} />
            <Map />
        </div>
    );
}

export default BakeryMap;