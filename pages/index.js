import Head from 'next/head';
import * as styles from './index.style';
import { useThemeSwitcher } from '@src/hooks';

export default function Home() {
  const [theme] = useThemeSwitcher();

  return (
    <div className={styles.container} data-theme={theme}>
      <Head>
        <title>Equatorious</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NFT Marketplace</h1>
      </main>
    </div>
  );
}
