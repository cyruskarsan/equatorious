import { MainApp } from '@src/components'
import * as styles from '@src/components/mainApp/index.style'
import { DAppProvider } from '@usedapp/core'

export default function Home() {
  return (
    <DAppProvider config={{}}>
      <MainApp>
        <h1 className={styles.title}>NFT Marketplace</h1>
        <p>put a button to enter app here</p>
      </MainApp>
    </DAppProvider>

  )
}
