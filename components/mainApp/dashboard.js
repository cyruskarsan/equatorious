import { useEthers } from '@usedapp/core';
import { NftCardGrid } from '@src/components';
import { isPolygonNetwork } from '@src/helpers';

const Dashboard = () => {
  const { account, chainId } = useEthers();

  return (
    <>
      <h1 className="self-center pt-4 text-2xl sm:text-3xl font-bold text-gray-900">
        Your Offchain Assets Dashboard
      </h1>
      {!account ? (
        <h3 className="pt-10 self-center">
          Please connect your wallet to view your assets.
        </h3>
      ) : !isPolygonNetwork(chainId) ? (
        <h3 className="pt-10">Please use the polygon network to connect.</h3>
      ) : (
        <NftCardGrid />
      )}
    </>
  );
};
export default Dashboard;
