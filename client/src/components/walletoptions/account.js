import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { Button} from 'react-bootstrap'


export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName || undefined });

  return (
      <Button className="mybutton button_fullcolor" onClick={() => disconnect()}>
        Disconnect Wallet
      </Button>
  );
}
