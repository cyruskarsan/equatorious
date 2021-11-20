export const mapNftToCardProps = (data) => {
  if (!data) return {};
  return {
    address: data.contract_address,
    id: data.token_id,
    contractName: data.name,
    contractDescription: data.description,
    ipfs: data.file_url,
    creator: data.creator_address,
  };
};

export const mapIpfsToHttps = (ipfs = '') =>
  ipfs.startsWith('ipfs://')
    ? ipfs.replace(/^ipfs:\/\//, 'https://ipfs.io/ipfs/')
    : ipfs;
