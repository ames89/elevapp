import React, { memo, useCallback, useState } from 'react';
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

const _MapContainer = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA6pIZx3cBvDguKxlt55j71QnV3djsV4Mg',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export const MapContainer = memo(_MapContainer);
