'use client'

import { LoadScript } from '@react-google-maps/api'


// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }: { children: JSX.Element }) {

  // Load the Google Maps JavaScript API asynchronously
  // const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
  //   id: "google-map-script", // กำหนด ID ให้คงที่
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  //   libraries: ['places', 'drawing', 'geometry'],
  //   language: "en",
  //   region: "US",
  // });

  // if(loadError) return <p>Encountered error while loading google maps</p>

  // if(!scriptLoaded) return <p>Map Script is loading ...</p>

  // Return the children prop wrapped by this MapProvider component
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
      libraries={['places', 'drawing', 'geometry']}
    >
      {children}
    </LoadScript>
  )
}