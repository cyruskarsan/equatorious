import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Mint = props => {

    const mint = () => {
        const body = {
            "chain": "polygon",
            "name": "Cyrus test NFT",
            "description": "Cyrus's test NFT",
            "file_url": "https://google.com",
            "mint_to_address": "0x94299e2f2E44474701145017185B8B0Df378641a"
        }
        
        fetch("https://api.nftport.xyz/v0/mints/easy/urls", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "91e45e10-9125-46f3-b7f8-dfd8b547837f"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }


    return (
        <div>
            <button onClick={mint}>Mint NFT</button>
        </div>
    );
};

Mint.propTypes = {

};

export default Mint;
