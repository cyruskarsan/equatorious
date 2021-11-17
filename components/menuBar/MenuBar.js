import { WalletConnectModal } from '@src/components';
import * as styles from './MenuBar.styles';

const AppBar = () => {
  return (
    <div className={styles.menuBarRoot}>
      <WalletConnectModal />
    </div>
  );
};

export default AppBar;
