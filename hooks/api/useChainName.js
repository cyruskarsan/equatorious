import { useEffect, useState } from 'react';
import { getChainName } from '@usedapp/core';

const useChainName = (id) => {
  const [chain, setChain] = useState();

  useEffect(() => {
    setChain(getChainName(id));
  }, [id]);

  return chain;
};

export default useChainName;
