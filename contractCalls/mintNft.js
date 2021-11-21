// import MintNftRequest from "./MintNftRequest"

const mintNft = (fileData, nftName, nftDesc, account) => {
  const options = {
    method: 'POST',
    body: fileData,
    headers: {
      Authorization: process.env.NFTPORT_KEY,
    },
  };

  return fetch(
    'https://api.nftport.xyz/v0/mints/easy/files?' +
      new URLSearchParams({
        chain: 'polygon',
        name: nftName,
        description: nftDesc,
        mint_to_address: account,
      }),
    options,
  );
};

export default mintNft;
