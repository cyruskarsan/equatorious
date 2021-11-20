import Head from 'next/head';
import { PropTypes } from 'prop-types';
import { DAppProvider } from '@usedapp/core';
import { AppBar } from '@src/components';
import { useThemeSwitcher } from '@src/hooks';
import * as styles from './MainApp.style';

export default function MainApp({ children }) {
  const [theme] = useThemeSwitcher();

  return (
    <div className={styles.container} data-theme={theme}>
      <DAppProvider config={{}}>
        <Head>
          <title>Equatorious</title>
        </Head>
        <main className={styles.main}>
          <AppBar />
          {children}
        </main>
      </DAppProvider>
    </div>
  );
}

MainApp.defaultProps = {
  children: () => {},
};

MainApp.propTypes = {
  children: PropTypes.node.isRequired,
};
