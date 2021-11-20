// lifted from https://stackoverflow.com/questions/68252365/how-to-trigger-change-blockchain-network-request-on-metamask
export const switchToPolygonChain = async () =>
{
  // Check if MetaMask is installed
  // MetaMask injects the global API into window.ethereum
  if ( window.ethereum )
  {
    try
    {
      // check if the chain to connect to is installed
      await window.ethereum.request( {
        method: 'wallet_switchEthereumChain',
        params: [ { chainId: '0x61' } ], // chainId must be in hexadecimal numbers
      } );
    } catch ( error )
    {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if ( error.code === 4902 )
      {
        try
        {
          await window.ethereum.request( {
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x61',
                rpcUrls: [ 'https://rpc-mainnet.matic.network' ],
                chainName: 'Polygon',
                nativeCurrency: {
                  symbol: 'MATIC',
                  name: 'Matic',
                  decimals: 18,
                },
              },
            ],
          } );
        } catch ( addError )
        {
          console.error( addError );
        }
      }
      console.error( error );
    }
  } else
  {
    // if no window.ethereum then MetaMask is not installed
    alert( 'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html' );
  }
};
