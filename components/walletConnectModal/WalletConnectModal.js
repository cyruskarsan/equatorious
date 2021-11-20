import { bool, node } from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Dialog } from '@src/components';
import { useEthers, /* useEtherBalance, */ getChainName } from '@usedapp/core';
import * as styles from './WalletConnectModal.styles';

const WalletConnectModal = () => {
  const [open, setOpen] = useState(false);

  // TODO: error handling if auth fails
  const { activateBrowserWallet, account, chainId } = useEthers();
  // const etherBalance = useEtherBalance(account);

  const [chain, setChain] = useState('None');

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    setChain(getChainName(chainId));
  }, [chainId]);

  const connectMetaMask = () => {
    activateBrowserWallet();
  };

  // const connectWalletConnect = () => {}; // TODO
  // const connectCoinbaseWallet = () => {}; // TODO
  // const connectFormatic = () => {}; // TODO
  // const connectPortis = () => {}; // TODO

  return (
    <>
      {!account && <Button onClick={openModal} text="Connect Wallet" />}
      {account && (
        <h3>
          {' '}
          Account:
          {account.slice(0, 6)}...
          {account.slice(account.length - 4, account.length)} on {chain}
        </h3>
      )}
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
