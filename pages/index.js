import Head from 'next/head';
import * as styles from './index.style';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Equatorious</title>
        <meta
          content="NFT Marketplace - Ethereum Web3 Jam Hackathon"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NFT Marketplace</h1>
      </main>
    </div>
  );
}
