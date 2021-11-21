import { css, cx } from '@emotion/css';

export const link = css`
  display: flex;
  text-decoration: none;
  font-size: large;
  font-size: 1rem;
  border-radius: 12px;
  padding: 8px 12px;
  width: fit-content;
  white-space: nowrap;
  &:hover {
    box-shadow: 0 0 0 1px var(--hover-outline);
  }
`;

export const active = css`
  font-weight: 600;
  color: var(--navlink-text-active);
  background-color: var(--navlink-bg-active);
`;

export const inactive = css`
  font-weight: 500;
  color: var(--navlink-text-inactive);
  &:hover {
    color: var(--navlink-text-hover);
  }
`;

export const sup = css`
  padding-left: 2px;
  font-weight: 600;
`;

export const getStyles = ({ isActive }) => ({
  navLinkRoot: cx(link, {
    [active]: isActive,
    [inactive]: !isActive,
  }),
  sup,
});
