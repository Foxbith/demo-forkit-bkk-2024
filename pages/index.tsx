/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Layout, Text, Page, Code, Link, Input, Button } from '@vercel/examples-ui'
import { MapComponent } from '../components/GoogleMap'
import Moralis from 'moralis'


type WalletTokenBalances = {
  name: string
  logo: string
  symbol: string
  balance: string
  tokenAddress: string
  possibleSpam: boolean
  verifiedContract: boolean
}

const CoinCard = (props: { wallet: WalletTokenBalances }) => {
  const { wallet } = props
  return (
    <div className="border-2 rounded border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {wallet.logo && (
            <img src={wallet.logo} alt={wallet.name} className="w-8 h-8" />
          )}
          <Text>
            {wallet.name}
          </Text>
        </div>
        <Text>
          {wallet.balance} {wallet.symbol}
        </Text>
      </div>
    </div>
  )
}

function Home() {
  const [chain, setChain] = useState({
    name: 'Ethereum',
    chain: '0x1'
  })
  const [loading, setLoading] = useState(false)
  const [showPossibleSpam, setShowPossibleSpam] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [walletAddress, setWalletAddress] = useState('0xcB1C1FdE09f811B294172696404e88E658659905')
  const [walletBalance, setWalletBalance] = useState<WalletTokenBalances[]>([])

  // 0xcB1C1FdE09f811B294172696404e88E658659905
  // 0xDC24316b9AE028F1497c275EB9192a3Ea0f67022
  // 0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326

  const handleStartMoralis = async () => {
    try {
      setLoading(true)
      await Moralis.start({
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIyOGE0Nzg5LTRhNDYtNGY3OC05MDMyLTNiMGE2ODEyM2RlOSIsIm9yZ0lkIjoiNDEzNjQ3IiwidXNlcklkIjoiNDI1MDk0IiwidHlwZUlkIjoiNzFlNTcyNzItOWU0ZC00Yzg5LThlZjktMTM2ODNmMzI5NGQ0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzAxMDQ0ODEsImV4cCI6NDg4NTg2NDQ4MX0.29RGFAUThaGWPMirRwDln6w0wPAd4o3Dx44lhY2sRUw'
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleGetBalance = async () => {
    try {
      setLoading(true)
      const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
        chain: chain.chain,
        address: walletAddress
      });

      console.log(response.result)
      const result = [] as WalletTokenBalances[]
      response.result.map((item) => {
        result.push({
          name: item.name,
          logo: item.logo || '',
          symbol: item.symbol,
          balance: item.balanceFormatted,
          tokenAddress: item.tokenAddress?.['_value'],
          possibleSpam: item.possibleSpam,
          verifiedContract: item.verifiedContract || false,
        })
      })
      console.log('result', result)
      setWalletBalance(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleStartMoralis()
  }, [])

  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1" className="text-start">Check your Crypto Wallet Balance</Text>
        <Text>
          Select a blockchain and enter your public wallet address to see the current native & ERC20 token balances of your cryptocurrency!
        </Text>
      </section>
      <div className="flex flex-col gap-2 pt-2">
        <Button
          onClick={() => {
            setShowMap((prev) => !prev)
          }}
          className="w-full border-none bg-gray-300 hover:bg-gray-500"
        >
          {showMap ? 'Hide' : 'Show'} Map
        </Button>
        {showMap && (
          <MapComponent />
        )}
      </div>

      <hr className="border-t border-accents-2 my-6" />

      <section className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button
            onClick={() => {
              setChain({
                name: 'Ethereum',
                chain: '0x1',
              })
              setShowPossibleSpam(false)
              setWalletBalance([])
            }}
            className="border-none bg-gray-300 hover:bg-gray-500"
          >
            Ethereum
          </Button>
          <Button
            onClick={() => {
              setChain({
                name: 'Polygon',
                chain: '0x89',
              })
              setShowPossibleSpam(false)
              setWalletBalance([])
            }}
            className="border-none bg-gray-300 hover:bg-gray-500"
          >
            Polygon
          </Button>
          <Button
            onClick={() => {
              setChain({
                name: 'Binance Smart Chain',
                chain: '0x38',
              })
              setShowPossibleSpam(false)
              setWalletBalance([])
            }}
            className="border-none bg-gray-300 hover:bg-gray-500"
          >
            Binance Smart Chain
          </Button>
        </div>
        <div className="flex gap-2">
          <div className="flex w-fit h-full bg-gray-600 p-2 rounded text-white">
            <Text className="text-nowrap">{chain.name}</Text>
          </div>
          <Input
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder='Enter wallet address'
          />
        </div>
        <Button
          onClick={() => handleGetBalance()}
          disabled={loading}
          loading={loading}
        >
          Show Balance
        </Button>
        <div className="flex flex-col gap-2">
          {walletBalance.length > 0 && walletBalance.filter((d) => !d.possibleSpam && d.verifiedContract).map((item) => (
            <div key={item.name}>
              <CoinCard wallet={item} />
            </div>
          ))}
        </div>
        {walletBalance.filter((d) => d.possibleSpam && !d.verifiedContract)?.length > 0 && (
          <Button
            onClick={() => setShowPossibleSpam((prev) => !prev)}
            disabled={loading}
            loading={loading}
          >
            {showPossibleSpam ? 'Hide' : 'Show'} Unverified Contract Balance
          </Button>
        )}
        {showPossibleSpam && walletBalance.filter((d) => d.possibleSpam && !d.verifiedContract).map((item) => (
          <div key={item.name}>
            <CoinCard wallet={item} />
          </div>
        ))}
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
