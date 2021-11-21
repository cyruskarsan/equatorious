import { NFTPORT_CONTRACT_ADDR } from '@src/helpers';
import { useMemo } from 'react';
import useDecodeNfts from './useDecodeNfts';
import useFetch from './useFetch';

export const useNftDetails = (address, tokenId) =>
  useFetch(`https://api.nftport.xyz/v0/nfts/${address}/${tokenId}`);

export const useNftsAll = () => useFetch(`https://api.nftport.xyz/v0/nfts`);

export const useNftsFromContract = (address) =>
  useFetch(`https://api.nftport.xyz/v0/nfts/${address}?chain=polygon`);

export const useNftsOwned = (address) => {
  const url = address
    ? `https://api.nftport.xyz/v0/accounts/${address}?chain=polygon`
    : '';
  const [{ data, error, loading }, executeFetch] = useFetch(url, {
    run: address,
  });
  const nfts = useMemo(
    () =>
      data?.nfts?.filter(
        (nft) => nft.contract_address == NFTPORT_CONTRACT_ADDR,
      ) || [],
    [data?.nfts],
  );
  const {
    data: nftData,
    error: nftError,
    loading: nftLoading,
  } = useDecodeNfts(nfts);
  return {
    data: nftData,
    error: error || nftError,
    loading: loading || nftLoading,
    executeFetch,
  };
};
