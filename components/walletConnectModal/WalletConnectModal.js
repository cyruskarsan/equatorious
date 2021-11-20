import { bool, node } from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Dialog } from '@src/components';
import {
  useEthers,
  getChainName,
  shortenAddress,
  useLookupAddress,
} from '@usedapp/core';
import DisconnectModal from './DisconnectModal';
import * as styles from './WalletConnectModal.styles';

const WalletConnectModal = () => {
  const [open, setOpen] = useState(false);
  const [disconnectModalStatus, setDisconnectModalStatus] = useState(false);
  const openDisconnectModal = () => setDisconnectModalStatus(true);

  // TODO: error handling if auth fails
  const { activateBrowserWallet, account, chainId, error } = useEthers();
  const ens = useLookupAddress();

  const [chain, setChain] = useState('None');

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    setChain(getChainName(chainId));
  }, [chainId]);

  useEffect(() => {
    if (error) {
      console.log('error occurred from useEthers:');
      console.error(error);
    }
  }, [error]);

  const connectMetaMask = () => {
    activateBrowserWallet();
    closeModal();
  };

  // const connectWalletConnect = () => { }; // TODO
  // const connectCoinbaseWallet = () => { }; // TODO
  // const connectFormatic = () => { }; // TODO
  // const connectPortis = () => { }; // TODO

  const connectButton = account ? (
    <Button
      onClick={openDisconnectModal}
      text={` Account: ${ens ?? shortenAddress(account)} on ${chain}`}
    />
  ) : (
    <Button onClick={openModal} text="Connect Wallet" />
  );

  return (
    <>
      {connectButton}
      <DisconnectModal
        isOpen={disconnectModalStatus}
        setIsOpen={setDisconnectModalStatus}
      />
      <Dialog label="Connect a Wallet" onClose={closeModal} open={open}>
        <div className={styles.connectHeading}>
          <h2>Connect a Wallet</h2>

          {/* TODO: make this button father away */}
          <Button onClick={closeModal} text="Close" />
        </div>
        <div className={styles.connectGrid}>
          <Button onClick={connectMetaMask} text="MetaMask" />
        </div>
      </Dialog>
    </>
  );
};

WalletConnectModal.defaultProps = {
  children: null,
  visible: false,
};

WalletConnectModal.propTypes = {
  children: node,
  visible: bool,
};

export default WalletConnectModal;
