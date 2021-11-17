import { css } from '@emotion/css';

export const modalRoot = css`
  position: fixed;
  background-color: var(--modal-bg);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const modalSection = css`
  max-width: '420px';
  background-color: var(--main-bg);
  position: absolute;
  top: 10%;
  bottom: 10%;
  padding: 1em;
  @media (max-width: 960px) {
    width: 65vw;
  }
  @media (max-width: 720px) {
    width: 85vw;
  }
`;

// 960px 65vw, 720px 85vw
