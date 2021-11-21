import { css } from '@emotion/css';

export const buttonRoot = css`
  font-weight: 500;
  border-radius: 8px;
  padding: 6px 8px;
  &:hover {
    box-shadow: 0 0 0 1px black;
  }
`;

export const buttonIcon = css`
  margin-right: 20px;
  max-width: 24px;
  max-height: 24px;
`;
