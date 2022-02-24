import React, { createContext, useContext, useEffect, useState } from 'react';
import { useOrgContext } from '../../Context/OrgContext';
import Geocode from "react-geocode";

const MapContext = createContext();
Geocode.setApiKey(process.env.REACT_APP_GMAP_KEY);

const MapContextProvider = ({ children }) => {
    // request organization locations
    const { spots } = useOrgContext();

    const [error, setError] = useState(null);
    const [spotsWithCoordinates, setSpotsWithCoordinates] = useState([]);

    // function to convert address to geocode
    let geocode = {};
    const geoCode = async (spots) => {
        await spots.map(async (spot) => {
            await Geocode.fromAddress(spot.location).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    geocode = {
                        lat: lat,
                        lng: lng
                    }
                    // add response to spotsWithCoordinates array
                    setSpotsWithCoordinates(spotsWithCoordinates => [...spotsWithCoordinates, Object.assign(spot, geocode)]);
                },
                error => {
                    console.error(error);
                    setError(error);
                }
            );
        });
    }

    useEffect(() => {
        geoCode(spots);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spots]);


    const values = {
        spotsWithCoordinates,
        error,
    }

    return (
        <MapContext.Provider value={values}>
            {children}
        </MapContext.Provider>
    );
};

const useMapContext = () => {
    return useContext(MapContext);
}

export { MapContextProvider, useMapContext };