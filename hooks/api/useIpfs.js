import { mapIpfsToHttps } from './mappers';
import useFetch from './useFetch';

const useIpfs = (ipfs = '') => {
  const url = mapIpfsToHttps(ipfs);
  return useFetch(url);
};

export default useIpfs;
