import { arrayOf, shape, string } from 'prop-types';
import { stringToId } from '@src/helpers';
import { NavLink } from '..';
import * as styles from './Nav.styles';

const Nav = ({ label, links }) => {
  return (
    <ul aria-label={label} className={styles.nav} role="menu">
      {links.map(({ href, target, text }) => (
        <li className={styles.listItem} key={stringToId(text)} role="none">
          <NavLink href={href} role="menuitem" target={target} text={text} />
        </li>
      ))}
    </ul>
  );
};

Nav.defaultProps = {
  label: null,
  links: [],
};

Nav.propTypes = {
  label: string,
  links: arrayOf(shape({ href: string.isRequired, text: string })),
};

export default Nav;
