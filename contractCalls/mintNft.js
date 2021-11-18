// import MintNftRequest from "./MintNftRequest"

// const mintNft = ( mintNftRequest: MintNftRequest ) =>
const mintNft = ( mintNftRequest ) =>
{
  console.log( "minting NFT. request: " + mintNftRequest );

  const fileData = new FormData();
  fileData.append( 'file', mintNftRequest.file );

  const body = {
    "chain": "polygon",
    "name": mintNftRequest.name,
    "description": "test NFT description",
    "file_url": mintNftRequest.file_url,
    "mint_to_address": mintNftRequest.mint_to_address,
  };

  fetch( "https://api.nftport.xyz/v0/mints/easy/urls", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": process.env.NFTPORT_KEY
    },

    body: JSON.stringify( body )
  } )
    .then( response =>
    {
      console.log( response );
      return response;
    } )
    .catch( err =>
    {
      console.error( err );
    } );
};

export default mintNft;
