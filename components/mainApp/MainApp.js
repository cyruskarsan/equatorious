import Head from 'next/head'
import { ReactNode } from 'react'
import { AppBar } from '@src/components'
import { useThemeSwitcher } from '@src/hooks'
import * as styles from './index.style'

export default function MainApp ( { children } )
{
  const [ theme ] = useThemeSwitcher()

  return (
    <div className={ styles.container } data-theme={ theme }>
      <Head>
        <title>Equatorious</title>
      </Head>

      <main className={ styles.main }>
        <AppBar />
        { children }
      </main>
    </div>
  )
}

MainApp.defaultProps = {
  children: () => { }
}

MainApp.propTypes = {
  children: ReactNode
}
