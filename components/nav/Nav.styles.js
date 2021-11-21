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
  @media (max-width: 450px) {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export const listItem = css`
  display: flex;
`;
