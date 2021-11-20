import { NftCardGrid } from ".."
import { useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { isPolygonNetwork, NFTPORT_API_KEY } from "@src/helpers"

const Dashboard = () =>
{
  const { account, chainId } = useEthers()
  const [ assets, setAssets ] = useState( [] )

  const fetchAssets = ( addr ) =>
  {
    if ( addr )
    {
      const url = `https://api.nftport.xyz/v0/accounts/${addr}?chain=polygon&account_address=addr&continuation=5&include=metadata`
      return new Promise( ( resolve, reject ) =>
      {
        fetch( url, {
          "method": "GET",
          "headers": {
            "Content-Type": "json",
            "Authorization": NFTPORT_API_KEY
          }
        } )
          .then( ( res ) => res.json() )
          .then( ( json ) => { resolve( json ) } )
          .catch( ( err ) => reject( err ) )
      } )
    }
    else
    {
      return new Promise( ( resolve, reject ) => reject( "Address undefined.  Connect Wallet to continue" ) )
    }
  }

  useEffect( () =>
  {
    fetchAssets( account )
      .then( setAssets )
      .catch( ( err ) => { console.error( err ) } )
  }, [ account ] )

  return !account ? <h3>Please connect your wallet to view your assets.</h3> :
    !isPolygonNetwork( chainId ) ? <h3>Please use the polygon network to connect.</h3> :
      <NftCardGrid items={ assets } />
}
export default Dashboard
