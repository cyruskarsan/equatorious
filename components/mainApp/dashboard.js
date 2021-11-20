import { NftCardGrid } from '..';
import { useEthers } from '@usedapp/core';
// import { useEffect, useState } from 'react';
import { isPolygonNetwork } from '@src/helpers';
// import fetchAssets from '@src/contractCalls/fetchNfts';

const Dashboard = () => {
  const { account, chainId } = useEthers();
  // const [ assets, setAssets ] = useState( [] );

  // const formatAssetResponse = ( { nfts } ) =>
  // {
  //   console.log( nfts );
  //   return nfts.map( ( nft ) =>
  //   {
  //     return {
  //       // nft.

  //     }
  //   } );
  // };

  // useEffect( () =>
  // {
  //   fetchAssets( account )
  //     .then( formatAssetResponse )
  //     .then( setAssets )
  //     .catch( ( err ) =>
  //     {
  //       console.error( err );
  //     } );
  // }, [ account ] );

  return !account ? (
    <h3>Please connect your wallet to view your assets.</h3>
  ) : !isPolygonNetwork(chainId) ? (
    <h3>Please use the polygon network to connect.</h3>
  ) : (
    // <NftCardGrid items={ assets } />
    <NftCardGrid />
  );
};
export default Dashboard;
