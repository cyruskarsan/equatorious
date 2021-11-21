import { useEthers } from '@usedapp/core';
import { NftCardGrid } from '@src/components';
import { isPolygonNetwork } from '@src/helpers';

const Dashboard = () => {
  const { account, chainId } = useEthers();

  return !account ? (
    <h3 className={'self-center'}>
      Please connect your wallet to view your assets.
    </h3>
  ) : !isPolygonNetwork(chainId) ? (
    <h3>Please use the polygon network to connect.</h3>
  ) : (
    <>
      <h1 className={'self-center text-3xl font-medium text-black'}>
        Your Offchain Assets Dashboard
      </h1>
      <NftCardGrid />
    </>
  );
};
export default Dashboard;
