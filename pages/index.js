import Head from 'next/head'
import Image from 'next/image'
import * as styles from './index.style';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Equatorious</title>
        <meta
          name="description"
          content="NFT Marketplace - Ethereum Web3 Jam Hackathon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NFT Marketplace
        </h1>
      </main>
    </div>
  );
}
