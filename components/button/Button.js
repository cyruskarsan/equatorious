import { func, string } from 'prop-types';
import Image from 'next/image';
import { cx } from '@emotion/css';
import * as styles from './Button.styles';

const Button = ({ className, icon, onClick, text, ...props }) => {
  return (
    <button
      className={cx(styles.buttonRoot, className)}
      onClick={onClick}
      type="button"
      {...props}
    >
      {icon && (
        <i className={styles.buttonIcon}>
          <Image alt="Metamask" height={24} src={icon} width={24} />
        </i>
      )}
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: null,
  icon: null,
  onClick: () => {},
  text: '',
};

Button.propTypes = {
  className: string,
  icon: string,
  onClick: func,
  text: string,
};

export default Button;
