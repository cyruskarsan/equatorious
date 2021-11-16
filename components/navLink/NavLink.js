import Link from 'next/link';
import { useRouter } from 'next/router';
import { oneOf, string } from 'prop-types';
import { getClasses } from './NavLink.styles';

const NavLink = ({ href, role, target, text }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href || asPath === href?.pathname;
  const linkClasses = getClasses({ isActive });
  console.log({ isActive, asPath, href });

  return (
    <Link href={href}>
      <a
        aria-current={isActive ? 'page' : null}
        className={linkClasses}
        href={href}
        role={role}
        target={target}
      >
        {text}
        {target === '_blank' && <sup>↗</sup>}
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  href: '#',
  role: null,
  target: null,
  text: '',
};

NavLink.propTypes = {
  href: string,
  role: string,
  target: oneOf(['_self', '_blank', '_parent', '_top']),
  text: string,
};

export default NavLink;
