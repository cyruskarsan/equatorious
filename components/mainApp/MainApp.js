import Head from 'next/head';
import { AppBar } from '@src/components';
import { PropTypes } from 'prop-types';
import { useThemeSwitcher } from '@src/hooks';
import * as styles from './index.style';

export default function MainApp ( { children } )
{
  const [ theme ] = useThemeSwitcher();

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
  );
}

MainApp.defaultProps = {
  children: () => { }
};

MainApp.propTypes = {
  children: PropTypes.node.isRequired
};
