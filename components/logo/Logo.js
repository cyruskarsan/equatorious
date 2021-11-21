import Image from 'next/image';
import Link from 'next/link';
import { logo } from '@src/assets/icons';
import * as styles from './Logo.styles';

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logoRoot}>
        <Image alt="Equatorious" height="32px" src={logo.src} width="32px" />
      </a>
    </Link>
  );
};

export default Logo;
