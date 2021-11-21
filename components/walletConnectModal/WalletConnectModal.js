import { useEffect, useState } from 'react';
import { bool, node } from 'prop-types';
import {
  useEthers,
  getChainName,
  shortenAddress,
  useLookupAddress,
} from '@usedapp/core';
import { cx } from '@emotion/css';
import { Button, Dialog } from '@src/components';
import { maticIcon, metamask, threeDots } from '@src/assets/icons';
import DisconnectModal from './DisconnectModal';
import * as styles from './WalletConnectModal.styles';
import { getConnectButtonText } from './WalletConnectModal.helpers';

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

  const handleButtonClick = account ? openDisconnectModal : openModal;
  const addressText = account ? ens ?? shortenAddress(account) : '';
  const buttonText = getConnectButtonText(account, chain, addressText);
  const connectButtonStyles = cx(styles.connectButton, {
    [styles.wrongNetwork]: account && chain !== 'Polygon',
  });

  // const connectWalletConnect = () => { }; // TODO
  // const connectCoinbaseWallet = () => { }; // TODO
  // const connectFormatic = () => { }; // TODO
  // const connectPortis = () => { }; // TODO

  return (
    <>
      <Button
        className={connectButtonStyles}
        icon={maticIcon.src}
        onClick={handleButtonClick}
        rightIcon={threeDots.src}
        text={buttonText}
      />
      <DisconnectModal
        isOpen={disconnectModalStatus}
        setIsOpen={setDisconnectModalStatus}
      />
      <Dialog label="Connect a Wallet" onClose={closeModal} open={open}>
        <div className={styles.connectHeading}>
          <h2>Connect a Wallet</h2>
          <Button onClick={closeModal} text="Close" />
        </div>
        <div className={styles.connectGrid}>
          <Button
            className={styles.metaMaskButton}
            icon={metamask.src}
            onClick={connectMetaMask}
            text="MetaMask"
          />
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
