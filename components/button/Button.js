import { func, node, string } from 'prop-types';
import Image from 'next/image';
import { cx } from '@emotion/css';
import * as styles from './Button.styles';

const Button = ({
  children,
  className,
  icon,
  onClick,
  rightIcon,
  text,
  ...props
}) => (
  <button
    className={cx(styles.buttonRoot, className)}
    onClick={onClick}
    type="button"
    {...props}
  >
    {icon && (
      <i
        className={cx(styles.buttonIcon, styles.buttonLeftIcon)}
        data-icon-left
      >
        <Image alt="Metamask" height={24} src={icon} width={24} />
      </i>
    )}
    <span data-text>{text}</span>
    {children}
    {rightIcon && (
      <i className={styles.buttonIcon} data-icon-right>
        <Image alt="Metamask" height={24} src={rightIcon} width={24} />
      </i>
    )}
  </button>
);

Button.defaultProps = {
  children: null,
  className: null,
  icon: null,
  onClick: () => {},
  rightIcon: null,
  text: '',
};

Button.propTypes = {
  children: node,
  className: string,
  icon: string,
  onClick: func,
  rightIcon: string,
  text: string,
};

export default Button;
