import mintNft from "@src/contractCalls/mintNft";
import FileUploadModal from "./FileUploadModal";
import { useEthers } from '@usedapp/core';
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import * as React from "react";
// import * as ReactDOM from "react-dom"

const MintPage = () =>
{
  const { account } = useEthers();
  const mint = ( event ) =>
  {
    // TODO: fix this to actually use the uploaded file, name, and wallet addr
    event.preventDefault();
    // const requestBody: MintNftRequest = {
    console.log( 'mint button clicked.' );
    console.log( event.target );
    console.log( 'account: ', account );
    const requestBody = {
      name: event.target.name.value,
      file_url: event.target.file.value,
      mint_to_address: event.target.addr.value
    };
    return mintNft( requestBody );
  };

  return (
    <FileUploadModal onSubmit={ mint } />
  );
};

export default MintPage;
