import useDecodeNfts from './useDecodeNfts';
import useFetch from './useFetch';

export const useNftDetails = (address, tokenId) =>
  useFetch(`https://api.nftport.xyz/v0/nfts/${address}/${tokenId}`);

export const useNftsFromContract = (address) =>
  useFetch(`https://api.nftport.xyz/v0/nfts/${address}?chain=polygon`);

export const useNftsOwned = (address) => {
  const [{ data, error, loading }, executeFetch] = useFetch(
    `https://api.nftport.xyz/v0/accounts/${address}?chain=polygon`,
  );
  const {
    data: nftData,
    error: nftError,
    loading: nftLoading,
  } = useDecodeNfts(data?.nfts);
  return {
    data: nftData,
    error: error || nftError,
    loading: loading || nftLoading,
    executeFetch,
  };
};

export const useNftsAll = () => useFetch(`https://api.nftport.xyz/v0/nfts`);
