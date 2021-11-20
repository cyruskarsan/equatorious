import { MainApp, NftCardGrid } from '@src/components';
import * as styles from '@src/components/mainApp/index.style';
import { useEthers } from '@usedapp/core';

export default function Home ()
{
  const { account } = useEthers();
  console.log( "home page, getting account: ", account );

  return (
    <MainApp>
      <h1 className={styles.title}>Your Offchain Assets Dashboard</h1>
      { account ? 
        <NftCardGrid /> :
        <h3>Please connect your wallet to view your assets.</h3>
      }
    </MainApp>
  );
}
