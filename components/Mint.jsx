import React from 'react';
import PropTypes from 'prop-types';

const Mint = props => {
    let formData = new FormData()

    formData.append('file', fs.createReadStream('sample_file.txt'));
    mintNFT = () => {
        let url = 'https://api.nftport.xyz/v0/mints/easy/files';
        const address = '0x94299e2f2E44474701145017185B8B0Df378641a'
        const name = 'cyrus_nft'
        const description = 'cyrus test 1'

        let options = {
            method: 'POST',
            qs: {
                chain: 'polygon',
                name: name,
                description: description,
                mint_to_address: address
            },
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: '91e45e10-9125-46f3-b7f8-dfd8b547837f',
                'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
            }
        };

        options.body = formData;

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }
    return (
        <div>
            <button onClick={mintNFT}>Mint NFT</button>

        </div>
    );
};

Mint.propTypes = {

};

export default Mint;
