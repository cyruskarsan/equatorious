import { css } from '@emotion/css';
import { MainApp, Dashboard } from '@src/components';

export const titleClass = css`
  color: var(--text-secondary);
  text-decoration: none;
`;

export default function Home() {
  return (
    <MainApp>
      <h1 className={'self-center ' + titleClass}>
        Your Offchain Assets Dashboard
      </h1>
      <Dashboard />
    </MainApp>
  );
}
