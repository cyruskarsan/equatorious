import { string } from 'prop-types';
import { useImageVerifier } from '@src/hooks/api';
import { mockItems } from './NftCardGrid.helper';

const NftCard = ({ description, image, name }) => {
  const isImage = useImageVerifier(image);
  const mockImage = mockItems[Math.floor(Math.random() * mockItems.length)].src;

  return (
    <div
      className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
      style={{ maxWidth: 250 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={name}
        className="rounded-t-lg w-full"
        src={isImage ? image : mockImage}
      />
      <div className="p-6">
        <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
          {name}
        </h1>
        <p className="text-gray-700 my-2 hover-text-900 ">{description}</p>
      </div>
    </div>
  );
};

NftCard.defaultProps = {
  description: '',
  image: '',
  name: '',
};

NftCard.propTypes = {
  description: string,
  image: string,
  name: string,
};

export default NftCard;

// alt, id, src, heading, description
/*
{
    address: data.contract_address,
    id: data.token_id,
    contractName: data.name,
    contractDescription: data.description,
    ipfs: data.file_url,
    creator: data.creator_address,
  };
*/
