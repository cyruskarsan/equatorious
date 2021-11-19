import { arrayOf, shape } from 'prop-types';
import { mockItems } from './NftCardGrid.helper';

const NftCardGrid = ({ items }) => {
  return (
    <div className="min-h-screen py-12 px-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-y-10 gap-x-20">
        {(items.length ? items : mockItems).map(
          ({ alt, id, src, heading, description }) => (
            <div
              className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
              key={id}
              style={{ maxWidth: 250 }}
            >
              <img alt={alt} className="rounded-t-lg w-full" src={src} />
              <div className="p-6">
                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                  {heading}
                </h1>
                <p className="text-gray-700 my-2 hover-text-900 ">{description}</p>
              </div>
            </div>
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
  items: arrayOf(shape()),
};

export default NftCardGrid;
