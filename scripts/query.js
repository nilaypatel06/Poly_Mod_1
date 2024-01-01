const hre = require("hardhat");
const CuteKittenJSON = require("../artifacts/contracts/CuteKitten.sol/CuteKitten.json");

const contractAddress = "0x73c4f8968b26a817cb5A86EdF27c86054d3A08DB";
const contractABI = CuteKittenJSON.abi;
const walletAddress = "0xBeEf9fc2480A9644f56603716dedF2C030a67122";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  console.log(`You have: ${await contract.balanceOf(walletAddress)} NFTs`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
