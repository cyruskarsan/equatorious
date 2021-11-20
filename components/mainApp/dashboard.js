import { NftCardGrid } from '..';
import { useEthers } from '@usedapp/core';
import { isPolygonNetwork } from '@src/helpers';

const Dashboard = () => {
  const { account, chainId } = useEthers();

  return !account ? (
    <h3>Please connect your wallet to view your assets.</h3>
  ) : !isPolygonNetwork(chainId) ? (
    <h3>Please use the polygon network to connect.</h3>
  ) : (
    <NftCardGrid />
  );
};
export default Dashboard;
