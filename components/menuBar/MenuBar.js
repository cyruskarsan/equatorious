import { WalletConnectModal } from '@src/components';
import * as styles from './MenuBar.styles';

const MenuBar = () => {
  return (
    <div className={styles.menuBarRoot}>
      <WalletConnectModal />
    </div>
  );
};

export default MenuBar;
