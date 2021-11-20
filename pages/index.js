import { css } from '@emotion/css';
import { MainApp, NftCardGrid } from '@src/components';
import { useNftsOwned } from '@src/hooks/api';

export const titleClass = css`
  color: var(--text-secondary);
  text-decoration: none;
`;

export default function Home() {
  const { data } = useNftsOwned(process.env.NEXT_PUBLIC_NFTPORT_ADDRESS);

  return (
    <MainApp>
      <h1 className={titleClass}>NFT Marketplace</h1>
      <p>put a button to enter app here</p>
      <NftCardGrid items={data} />
    </MainApp>
  );
}
