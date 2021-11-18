import mintNft from "@src/contractCalls/mintNft"
// import MintNftRequest from "@src/contractCalls/MintNftRequest"
import * as React from "react"
// import * as ReactDOM from "react-dom"

const MintPage = () =>
{
  const mint = ( event ) =>
  {
    event.preventDefault()
    // const requestBody: MintNftRequest = {
    const requestBody = {
      name: event.target.name.value,
      file_url: event.target.url.value,
      mint_to_address: event.target.addr.value
    }
    return mintNft( requestBody )
  }

  return (
    <form onSubmit={ mint } >
      <label htmlFor="name" >Name</label>
      <input id="name" type="text" />
      <br />
      <label htmlFor="url" >URL</label>
      <input id="url" type="text" />
      <br />
      <label htmlFor="addr" >Address</label>
      <input id="addr" type="text" />
      <br />
      <button type="submit" > Mint! </button>
    </form>
  )
}

export default MintPage
