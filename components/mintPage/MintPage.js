import * as React from "react";
import { useState } from "react";
import { useEthers } from '@usedapp/core';
import mintNft from "@src/contractCalls/mintNft";
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import FileUploadModal from "./FileUploadModal";

const MintPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState()
  const { account } = useEthers();

  const mint = (file, name, desc) => {
    event.preventDefault();

    setIsLoading(true);
    mintNft(file, name, desc, account)
      .then((response) => {
        // todo: successMessage
        setIsLoading(false);
        setSuccess(response.json())
      })
      .catch((err) => {
        console.error(err);
      });

  };

  return isLoading ?
    <h3>Uploading your asset...</h3> :
    <FileUploadModal onSubmit={mint} />
};

export default MintPage;
