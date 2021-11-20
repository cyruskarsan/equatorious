import * as React from 'react';
import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import { isPolygonNetwork } from '@src/helpers';
import mintNft from '@src/contractCalls/mintNft';
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import FileUploadModal from "./FileUploadModal"
import SuccessModal from "../SuccessModal/SuccessModal"

const MintPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successStatus, setSuccessStatus] = useState();
  const [polygonUrl, setPolygonUrl] = useState();
  const { account, chainId } = useEthers();

  const handleCallback = (childData) => {
    setSuccess(false)
    isLoading(false)
  }

  const mint = (file, name, desc) => {
    if (isPolygonNetwork(chainId)) {
      setIsLoading(true);
      mintNft(file, name, desc, account)
        .then((response) => {
          // todo: successMessage
          setIsLoading(false);
          return response.json()
        })
        .then((json) => {
          setSuccessStatus(true)
          setPolygonUrl(json.transaction_external_url)
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // TODO: might wanna prevent the user from entering info
      // into form if the page will refresh upon switching network....
      alert('Must be connected to polygon network! Please try again.');
    }
  };

  if (isLoading) {
    return <h3>Uploading your asset...</h3>
  }

  if (successStatus) {
    return (
    <SuccessModal 
      isOpen = {successStatus}
      setIsOpen = {setSuccessStatus} 
      polygonUrl={polygonUrl}/>
    )
  }
   return(
    <FileUploadModal onSubmit={ mint }/>
   )
}

export default MintPage;
