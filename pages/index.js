import { MainApp } from '@src/components';
import * as styles from '@src/components/mainApp/index.style';
import { useEthers } from '@usedapp/core';

export default function Home ()
{
  const { account } = useEthers();
  console.log( "home page, getting account: ", account );
  if ( account )
  {
    // redirect to dashboard
    window.location = "/dashboard";
  }

  return (
    <MainApp>
      <h1 className={ styles.title }>Your Offchain Assets Dashboard</h1>
      <p>SIWE</p>
    </MainApp>
  );
}
