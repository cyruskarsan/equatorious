// import MintNftRequest from "./MintNftRequest"

// const mintNft = ( mintNftRequest: MintNftRequest ) =>
const mintNft = ( mintNftRequest ) =>
{
  console.log( "minting NFT. request: " + mintNftRequest );

  const fileData = new FormData();
  fileData.append( 'file', mintNftRequest.file );


  const options = {
    method: 'POST',
    body: form,
    headers: {
      "Authorization": "91e45e10-9125-46f3-b7f8-dfd8b547837f"
    }
  }

  fetch( "https://api.nftport.xyz/v0/mints/easy/urls", {
   chain: "polygon",
   name: "Test",
   description: "Test",
   mint_to_address: "0x94299e2f2E44474701145017185B8B0Df378641a"
  } ), options
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
