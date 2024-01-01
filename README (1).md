# CuteKitten NFT Contract and bridge Scripts

## Overview

This repository contains the source code for the CuteKitten NFT contract, deployment script, and bridgeion scripts. The CuteKitten contract is an ERC-721 compliant smart contract for minting and managing Cute Kitten-themed NFTs.

## Contract Details

### CuteKitten.sol

- The main contract file is `contracts/CuteKitten.sol`.
- It inherits from OpenZeppelin's ERC721 and Ownable contracts.
- The contract includes functions for minting NFTs, querying the model description, and setting the base URI.

## Deployment Script

### deploy.js

- The deployment script is located in the `scripts` directory and is named `deploy.js`.
- It deploys the CuteKitten contract and writes the contract address to `data/ContractAddress.js`.

## bridgeion Script

### bridge.js

- The bridgeion script is located in the `scripts` directory and is named `bridge.js`.
- It bridges with the deployed CuteKitten contract, approves NFT transfers, and deposits NFTs into an external contract.

## Query Script

### query.js

- The query script is located in the `scripts` directory and is named `query.js`.
- It queries the number of NFTs owned by a specific wallet address.

## How to Run

Follow the steps below to execute the NFT transfer:

1. Deploy the NFT contract to the Goerli network using the command:
   &emsp;`npx hardhat run scripts/deploy.js --network goerli --show-stack-traces`
2. Rename `.env.example` to `.env` and note the NFT contract address and add it to your `.env` file and add your private key.
3. Mint NFTs on the Goerli network using the command:
   &emsp;`npx hardhat run scripts/mintNFT.js --network goerli --show-stack-trace`
4. Map the NFT tokens to the Polygon network using the [Polygon Token Mapper](https://mapper.polygon.technology/map).
5. Approve the deposit of NFTs on the Goerli network using the command:
   &emsp;`npx hardhat run scripts/bridge.js --network goerli --show-stack-traces`
6. Modify the wallet address and contract address in the `getBalance.js` script.
7. Check the NFT balance on the Polygon network using the command:
   &emsp;`npx hardhat run scripts/query.js --network mumbai`

## Authors

- Nilay Patel


