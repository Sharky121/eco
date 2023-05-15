import React from 'react';
import {
    YMaps,
    Map,
    Placemark
} from 'react-yandex-maps';

interface MapProps {
    lat: number;
    lng: number;
}

const MyMap: React.FC<MapProps> = ({ lat, lng }) => {
    const mapState = {
        center: [lat, lng],
        zoom: 15,
    };

    return (
        <YMaps>
            <Map state={mapState} width="100%" height="200px">
                <Placemark geometry={[lat, lng]} />
            </Map>
        </YMaps>
    );
};

export default MyMap;
