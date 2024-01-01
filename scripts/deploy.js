const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const CKContract = await ethers.getContractFactory("CuteKitten");

  const nftContract = await CKContract.deploy();

  await nftContract.deployed();

  console.log("NFT contract deployed to address: ", nftContract.address);
  fs.writeFileSync("data/ContractAddress.js", `export const ContractAddress = "${nftContract.address}";`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
