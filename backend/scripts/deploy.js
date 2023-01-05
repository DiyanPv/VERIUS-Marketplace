const { ethers, hre } = require("hardhat");
require(`dotenv`).config();
const Goerli_Address = process.env.DEPLOYED_CONTRACT;
let contractAddress;
const main = async () => {
  let signer;
  const Transfers = await ethers.getContractFactory("Transfers");
  signer = await ethers.getSigner();
  const checkIfExisting = await ethers.getContractAt(
    "Transfers",
    Goerli_Address,
    signer
  );
  if (!checkIfExisting) {
    const transactions = await Transfers.deploy();
    await transactions.deployed();
    console.log(`Transactions deployed to : ${transactions.address}`);
    contractAddress = transactions.address;
    return;
  }
  contractAddress = checkIfExisting.address;
  console.log(`Transaction already deployed at ${checkIfExisting.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
