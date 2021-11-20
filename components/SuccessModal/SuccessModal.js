import React from 'react';
import Router from 'next/router';
import { PropTypes } from 'prop-types';

const SuccessModal = ({ isOpen, setIsOpen, polygonUrl }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDashboardButton = () => {
    Router.push('/');
  };

  return (
    <div
      className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
      hidden={!isOpen}
    >
      {/* modal */}
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        {/* modal header  */}
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">NFT minted successfully!</h3>
          <button
            className="text-black close-modal"
            onClick={handleCloseModal}
            type="button"
          >
            X
          </button>
        </div>
        {/* module body */}
        <div className="p-3">
          <a
            className="text-blue-600 hover:underline"
            href={polygonUrl}
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            Check it out on PolygonScan!
          </a>
        </div>
        <div className="flex justify-between items-center w-100 border-t p-3">
          <button
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal"
            onClick={handleCloseModal}
            type="button"
          >
            Mint More!
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
            onClick={handleDashboardButton}
            type="button"
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  polygonUrl: PropTypes.str.isRequired,
};

export default SuccessModal;
