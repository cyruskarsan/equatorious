# Equatorious - NFT Marketplace (EthGlobal Web3 Hackaton)
Equatorious is your NFT marketplace for storing traditionally owned assets on the blockchain. 
You can use Equatorious to:
- Mint NFT's for your real world assets
- View your NFT collection
- Transfer ownership (in progress)


## How it works:
1. Connect your metamask wallet (on Polygon)
2. Mint the NFT with a photo of proof of ownership
3. View your NFT on the dashboard


## Our vision 
Our goal was to build an NFT platform specifically for managing real world assets, traditionally "owned" through titles, deeds, registrations, etc.  These documents are typically stored in a firebox or safe, but would instead be stored as NFT’s on our platform and uploaded to IPFS via NFTPort and displayed on a user's dashboard. This makes these documents universally accessible and provides the user with provable ownership of the assets in question.  Future improvements could include transfer functionality, with requests and acceptance to ensure assets were sent to the right wallet, joint asset ownership, and documenting purchases when transferred for tax purposes and record keeping.  We believe that, as a global digital ledger, the blockchain is the perfect platform, and NFTs the perfect vehicle for representing verifiable ownership.  Currently, state governments duplicate efforts of maintaining these records, which could be automated and transitioned to self-service functionality through dapps like Equatorious.   

## Tech Stack
- NextJS, React frontend
- NFTport for Polygon blockchain interface
- IPFS for decentralized file storage
- Tailwind & emotion css for styling
- Vercel for deployment and devops
- useDapp for web3 connections

## Technical Details
We utilize NFTPort as a backend service to interface with the polygon blockchain, mint new off chain assets as NFTs, as well as fetching the NFTs owned by the connected wallet, and filtering by the NFTPort contract address to only show assets for our app.  We spun up some custom react hooks for fetching data from NFTPort and IPFS, and IPFS was used to host the images for each NFT.  We leveraged useDapp to initiate and connect the user’s metamask wallet to our website which also pulls in the connected wallet's ENS name, although, unfortunately, it doesn't show when connected to polygon.  For styling, we used tailwindcss to create clean, beautiful, custom components showcased throughout our application in addition to emotion css. We used Next.js for routing, building and deploying our frontend code to vercel. Vercel enabled us to create custom testing environments for each PR ensuring our code worked as intended and automatically deployed PR’s merged to main to our production environment.

[Video Demo](https://drive.google.com/file/d/1YNK6DxzAFL2HJRlETNpRvrVAEVeFl3qq/view?usp=sharing)