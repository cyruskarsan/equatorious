import Head from 'next/head';
import { AppBar } from '@src/components';
import { useThemeSwitcher } from '@src/hooks';
import * as styles from './index.style';
import { DAppProvider } from '@usedapp/core';

export default function Home() {
  const [theme] = useThemeSwitcher();

  return (
    <div className={styles.container} data-theme={theme}>
      <Head>
        <title>Equatorious</title>
      </Head>
      <DAppProvider config={{}}>
      <main className={styles.main}>
        <AppBar />
        <h1 className={styles.title}>NFT Marketplace</h1>
      </main>
      </DAppProvider>
    </div>
  );
}
