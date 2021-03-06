import { Logo, MenuBar, Nav } from '@src/components';
import { mainNavLinks } from '@src/helpers';
import * as styles from './AppBar.styles';

const AppBar = () => {
  return (
    <header className={styles.appBarRoot}>
      <Logo />
      <Nav label="main navigation" links={mainNavLinks} />
      <MenuBar />
    </header>
  );
};

export default AppBar;
