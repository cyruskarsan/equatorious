import { MainApp, Dashboard } from '@src/components'
import * as styles from '@src/components/mainApp/index.style'

export default function Home ()
{
  return (
    <MainApp>
      <h1 className={ styles.title }>Your Offchain Assets Dashboard</h1>
      <Dashboard />
    </MainApp>
  )
}
