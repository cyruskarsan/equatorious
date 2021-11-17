import { css } from '@emotion/css';

export const nav = css`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding: 4px;
  background-color: var(--main-nav-bg);
  width: fit-content;
  border-radius: 16px;
  list-style: none;
  margin: 0;
`;

export const listItem = css`
  display: flex;
`;
