import Head from 'next/head';
import { AppBar } from '@src/components';
import { useThemeSwitcher } from '@src/hooks';
import * as styles from './index.style';

export default function Home() {
  const [theme] = useThemeSwitcher();

  return (
    <div className={styles.container} data-theme={theme}>
      <Head>
        <title>Equatorious</title>
      </Head>

      <main className={styles.main}>
        <AppBar />
        <h1 className={styles.title}>NFT Marketplace</h1>
      </main>
    </div>
  );
}
