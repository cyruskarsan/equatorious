import { bool, node } from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Modal } from '@src/components';
import * as styles from './WalletConnectModal.styles';
import { useEthers, useEtherBalance, getChainName } from '@usedapp/core';
import { formatEther } from "@ethersproject/units";

const WalletConnectModal = () => {
  const [open, setOpen] = useState(false);

  const {activateBrowserWallet, account, chainId, error} = useEthers()
  const etherBalance = useEtherBalance(account)

  const [chain, setChain] = useState('None')

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    setChain(getChainName(chainId))
  }, [chainId])


  const connectMetaMask = () => {
    activateBrowserWallet()
  };

  const connectWalletConnect = () => {}; // TODO
  const connectCoinbaseWallet = () => {}; // TODO
  const connectFormatic = () => {}; // TODO
  const connectPortis = () => {}; // TODO

  return (
    <>
      {!account  && <Button onClick={openModal} text="Connect Wallet" /> }
      {account && <h3> Account:
            { account.slice(0, 6)}...{account.slice(
              account.length - 4,
              account.length
            )} on {chain}</h3>}
      <Modal label="Connect a Wallet" onClose={closeModal} open={open}>
        <div className={styles.connectHeading}>
          <h2>Connect a Wallet</h2>
          <Button onClick={closeModal} text="Close Modal" />
        </div>
        <div className={styles.connectGrid}>
          <Button onClick={connectMetaMask} text="MetaMask" />
          <Button onClick={connectWalletConnect} text="WalletConnect" />
          <Button onClick={connectCoinbaseWallet} text="Coinbase Wallet" />
          <Button onClick={connectFormatic} text="Fortmatic" />
          <Button onClick={connectPortis} text="Portis" />
        </div>
      </Modal>
    </>
  );
}

WalletConnectModal.defaultProps = {
  children: null,
  visible: false,
};

WalletConnectModal.propTypes = {
  children: node,
  visible: bool,
};

export default WalletConnectModal;
