'use client'

import { LoadScript } from '@react-google-maps/api'

export function MapProvider({ children }: { children: JSX.Element }) {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
      libraries={['places', 'drawing', 'geometry']}
    >
      {children}
    </LoadScript>
  )
}