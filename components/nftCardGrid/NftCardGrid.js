import { arrayOf, shape, string } from 'prop-types';
import { useEthers } from '@usedapp/core';
import { useNftsOwned } from '@src/hooks/api';
import NftCard from './NftCard';
import { mockItems } from './NftCardGrid.helper';

const NftCardGrid = () => {
  const { account } = useEthers();
  const { data } = useNftsOwned(account);

  return (
    <div className="min-h-screen py-12 px-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-y-10 gap-x-20">
        {(data?.length ? data : mockItems).map(
          ({ description, id, image, name }) => (
            <NftCard
              description={description}
              image={image}
              key={id}
              name={name}
            />
          ),
        )}
      </div>
    </div>
  );
};

NftCardGrid.defaultProps = {
  items: [],
};

NftCardGrid.propTypes = {
  items: arrayOf(
    shape({
      description: string,
      id: string,
      image: string,
      name: string,
    }),
  ),
};

export default NftCardGrid;
