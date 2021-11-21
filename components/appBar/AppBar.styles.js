import { css } from '@emotion/css';

export const appBarRoot = css`
  display: grid;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  @media (min-width: 450px) {
    grid-template-columns: 48px 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 48px 1fr;
    justify-content: right;
  }
`;
