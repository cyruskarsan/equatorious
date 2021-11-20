import { useEffect, useRef, useState } from 'react';
import { mapIpfsToHttps, mapNftToCardProps } from './mappers';

/**
 * @param {[{id,ipfs}]} nfts
 * @returns {{ data: Array<object>, error: object, loading: boolean }}
 */
const useDecodeNfts = (nfts) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const mountedRef = useRef();

  useEffect(() => {
    mountedRef.current = true;

    const fetchData = async () => {
      if (!mountedRef.current || !Array.isArray(nfts)) return;
      setLoading(true);

      try {
        await Promise.all(
          nfts.map(async (nft, idx) => {
            const { id, ipfs } = mapNftToCardProps(nft);
            if (ipfs) {
              const url = mapIpfsToHttps(ipfs);
              const res = await fetch(url);
              const json = await res.json();
              setData((prevData) => [
                ...prevData,
                { ...nfts[idx], ...json, id },
              ]);
            }
            //   setData((prevData) => [...prevData, nfts[idx]]);
            // }
          }),
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => (mountedRef.current = false);
  }, [nfts]);

  return { data, error, loading };
};

export default useDecodeNfts;
