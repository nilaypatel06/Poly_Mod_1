const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
require("dotenv").config();

async function main() {
  const network = "https://rpc.goerli.eth.gateway.fm";

  const provider = new ethers.providers.JsonRpcProvider(network);

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const CKContract = await ethers.getContractFactory("CuteKitten", signer);

  const contractAddress = "0x44880407C8b616fcEaff0a1faa1D3E4C8c81B676";
  const contract = await CKContract.attach(contractAddress);

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  for (let i = 0; i < 5; i++) {
    const approveTransaction = await contract.connect(signer).approve(fxRootAddress, i);
    await approveTransaction.wait();
    console.log(`NFT with ID ${i} approved for transfer`);
  }

  for (let i = 0; i < 5; i++) {
    const gasPrice = ethers.utils.parseUnits("50", "gwei");
    const depositTransaction = await fxRoot.connect(signer).deposit(process.env.CONTRACT_ADDR, signer.address, i, "0x6770", { gasPrice });
    await depositTransaction.wait();
    console.log(`NFT with ID ${i} deposited successfully`);
  }

  console.log("Approved and Deposited all NFTs");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
