import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
require(`dotenv`).config();
const contractAddress = process.env.DEPLOYED_CONTRACT;
import abi from "../utils/TransfersAbi.json";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  console.log(signer);
  const transactionContract = new ethers.Contract(contractAddress, abi, signer);
  console.log(`Address is : ${transactionContract}`)
};

export const transactionProvider = ({props})=> {
<TransactionContext.Provider value={{value: "test"}}>
    {props}
</TransactionContext.Provider>
}