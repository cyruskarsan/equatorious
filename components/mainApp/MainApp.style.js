import { css } from '@emotion/css';

export const container = css`
  @media (max-width: 640px) {
    padding: 0 0.5rem;
  }
  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`;

export const main = css`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 640px) {
    padding-bottom: 50px;
  }
`;
