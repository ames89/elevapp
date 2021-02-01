import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100%',
  flex: 1,
};

const center = {
  lat: 9.955987,
  lng: -84.225739,
};

export const _MapContainer = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA6pIZx3cBvDguKxlt55j71QnV3djsV4Mg',
  });

  const [map, setMap] = useState(null);

  const onLoad = (map: any): void => {
    setMap(map);
  };

  const onUnmount = (): void => {
    setMap(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export const MapContainer = React.memo(_MapContainer);