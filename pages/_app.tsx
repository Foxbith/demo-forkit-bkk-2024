import type { AppProps } from 'next/app'
import { MapProvider } from '../providers/map-provider'
// import type { LayoutProps } from '@vercel/examples-ui/layout'

// import { getLayout, Button } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  // const { isLoaded } = useMap();

  // if (!isLoaded) return <p>Loading...</p>;
  // const Layout = getLayout<LayoutProps>(Component)

  return (
    // <Layout
    //   title="mint-nft"
    //   path="solutions/mint-nft"
    //   description="How to mint an NFT"
    // >
    //   <Component {...pageProps} />
    // </Layout>
    <main>
      <MapProvider>
        <Component {...pageProps} />
      </MapProvider>
    </main>

  )
}

export default App
