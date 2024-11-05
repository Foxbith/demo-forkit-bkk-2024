'use client'

import { GoogleMap } from '@react-google-maps/api'

//Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '30vh',
  borderRadius: '15px',
};

//K2's coordinates
const defaultMapCenter = {
  lat: 13.7424598,
  lng: 100.5858312
}

//Default zoom level, can be adjusted
const defaultMapZoom = 17

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
      </GoogleMap>
    </div>
  )
};

export { MapComponent };