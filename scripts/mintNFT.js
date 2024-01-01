const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const network = "https://rpc.goerli.eth.gateway.fm";

  const provider = new ethers.providers.JsonRpcProvider(network);

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const FMContract = await ethers.getContractFactory("CuteKitten", signer);

  const contract = await FMContract.attach(process.env.CONTRACT_ADDR);

  await contract.safeMint();

  console.log("Minted successfully.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
