import { func, string } from 'prop-types';
import * as styles from './Button.styles';

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.buttonRoot} onClick={onClick} type="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  text: '',
};

Button.propTypes = {
  onClick: func,
  text: string,
};

export default Button;
