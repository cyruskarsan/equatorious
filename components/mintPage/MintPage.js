import mintNft from "@src/contractCalls/mintNft";
import FileUploadModal from "./FileUploadModal";
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import * as React from "react";
// import * as ReactDOM from "react-dom"

const MintPage = () =>
{
  const mint = ( event ) =>
  {
    event.preventDefault();
    console.log( 'mint button clicked.' );
    console.log( event.target );
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
