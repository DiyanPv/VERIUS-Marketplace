import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
const { ethereum } = window;
import abi from "../utils/TransfersAbi.json";
const contractAddress = `0xB648499d759f60f6e40f493c5b843Cb8DAD92fd6`;
export const TransactionContext = createContext();

const sendTransaction = () => {
  try {
    if (!ethereum) {
      return alert(`Install MetaMask`);
    }
    // const { addressTo, amount, keyword, message } = formData;
    getEthereumContract();
  } catch (error) {
    console.log(error);
  }
};

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  console.log(signer);
  const transactionContract = new ethers.Contract(contractAddress, abi, signer);
  console.log(`Address is : ${transactionContract}`);
};

export const TransactionProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e, name) => {
    console.log(e.target.value);
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [account, setAccount] = useState();
  const connectWallet = async () => {
    if (!ethereum) {
      return alert("Please install MetaMask");
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    setAccount(accounts[0]);
  };

  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        account,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
