import Image from 'next/image';
import { logo } from '@src/assets/icons';
import * as styles from './Logo.styles';

const Logo = () => {
  return (
    <span className={styles.logoRoot}>
      <Image alt="Equatorious" height="32px" src={logo.src} width="32px" />
    </span>
  );
};

export default Logo;
