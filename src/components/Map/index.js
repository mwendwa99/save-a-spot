import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import MapStyles from './MapStyles';
// import { useMapContext } from './MapContext';
// import Assets from '../../../Assets';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '30rem',
    borderRadius: '10px',
    marginTop: '1rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};
const center = {
    lat: -1.2850,
    lng: 36.8219
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: MapStyles,
};




const Map = ({ search }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAP_KEY,
        libraries,
    });

    // const { spotsWithCoordinates } = useMapContext();


    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15.5}
            options={options}
            center={center}
        >
            {/* {
                spotsWithCoordinates ? spotsWithCoordinates.map(spot => (
                    <Marker
                        // icon={Assets.logoPng}
                        position={{ lat: spot.lat, lng: spot.lng }}
                        onClick={() => {
                            console.log('You clicked me!');
                        }}
                    />
                )) : null
            } */}
        </GoogleMap>
    )
}


export default Map;