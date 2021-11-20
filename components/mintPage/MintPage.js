import * as React from 'react';
import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import { isPolygonNetwork } from '@src/helpers';
import mintNft from '@src/contractCalls/mintNft';
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import FileUploadModal from './FileUploadModal';

const MintPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setSuccess] = useState();
  const [error, setError] = useState('');
  const { account, chainId } = useEthers();

  const mint = (file, name, desc) => {
    if (isPolygonNetwork(chainId)) {
      setIsLoading(true);
      mintNft(file, name, desc, account)
        .then((response) => {
          // todo: successMessage
          setIsLoading(false);
          setSuccess(response.json());
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.error(err);
          console.log(process.env.NEXT_PUBLIC_NFTPORT_KEY);
        });
    } else {
      // TODO: might wanna prevent the user from entering info
      // into form if the page will refresh upon switching network....
      alert('Must be connected to polygon network! Please try again.');
    }
  };

  return isLoading ? (
    <h3>Uploading your asset...</h3>
  ) : error ? (
    ((<h3>There was an error minting your nft.</h3>), (<p>{error}</p>))
  ) : (
    <FileUploadModal onSubmit={mint} />
  );
};

export default MintPage;
