import { string } from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { useImageVerifier } from '@src/hooks/api';
import { noImage } from '@src/assets/icons';
import * as styles from './NftCard.styles';

const NftCard = ({ description, image, name }) => {
  const isImage = useImageVerifier(image);

  return (
    <Link href={image}>
      <a
        className={`container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 ${styles.cardLink}`}
        target="_blank"
      >
        <Image
          alt={name}
          className={`rounded-t-lg w-full ${styles.cardImage}`}
          height="250px"
          objectFit="cover"
          src={isImage ? image : noImage.src}
          width="250px"
        />
        <div className="p-6">
          <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
            {name}
          </h1>
          <p className="text-gray-700 my-2 hover-text-900 ">{description}</p>
        </div>
      </a>
    </Link>
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
