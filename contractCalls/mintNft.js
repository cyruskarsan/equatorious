// import MintNftRequest from "./MintNftRequest"

const mintNft = (fileData, nftName, nftDesc, account) =>
{
  const options = {
    method: 'POST',
    body: fileData,
    headers: {
      "Authorization": "91e45e10-9125-46f3-b7f8-dfd8b547837f"
    }
  }
  
  return fetch("https://api.nftport.xyz/v0/mints/easy/files?" + new URLSearchParams({
    chain: "polygon",
    name: nftName,
    description: nftDesc,
    mint_to_address: account,
  } ), options)
};

export default mintNft;
