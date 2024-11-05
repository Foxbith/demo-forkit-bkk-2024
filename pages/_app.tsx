import type { AppProps } from 'next/app'
import { MapProvider } from '../providers/map-provider'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <main>
      <MapProvider>
        <Component {...pageProps} />
      </MapProvider>
    </main>

  )
}

export default App
