import * as React from 'react'
import { Connector, useConnect, useAccount } from 'wagmi'
import { Button} from 'react-bootstrap'
import { Account } from './account'

export default function WalletOptions() {
  const { connectors, connect } = useConnect()
  const {isConnected} = useAccount()

  if(isConnected) {
    return <Account />
  } else {
     return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))[0]
  }


}

export function WalletOption({
  connector,
  onClick,
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <Button className="mybutton button_fullcolor"  disabled={!ready} onClick={onClick}>
        {/* {connector.name} */}
        {/* key={connectors[0].uid} */}
        {'Connect Wallet'}
    </Button>
  )
}