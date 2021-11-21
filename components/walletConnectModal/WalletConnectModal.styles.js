import { css } from '@emotion/css';

export const connectHeading = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const connectGrid = css`
  display: grid;
  gap: 10px;
`;

export const maticIcon = css`
  display: flex;
  align-items: center;
  margin-right: 10px !important;
`;

export const connectButton = css`
  display: flex;
  align-items: center;
  background-color: var(--navlink-bg-active);
  & span[data-text] {
    font-weight: 600;
  }
  & [data-icon-right] {
    display: flex;
    align-items: center;
    @media (min-width: 620px) {
      display: none;
    }
  }
  @media (min-width: 620px) {
    & > span:not([data-text]) {
      display: none !important;
    }
  }
  @media (max-width: 620px) {
    & > span[data-text] {
      display: none !important;
    }
  }
`;

export const connectButtonMask = css`
  & [data-icon-left] {
    position: relative;
  }
  & [data-icon-mask] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--icon-mask);
    border-radius: 10px;
    z-index: 10;
  }
`;

export const wrongNetwork = css`
  background-color: rgba(255, 0, 0, 0.1);
`;

export const metaMaskButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--navlink-bg-active);
  padding: 1rem;
`;
