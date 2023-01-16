import React, { useState, useEffect, createContext } from "react";
import { BigNumber, ethers } from "ethers";
const { ethereum } = window;
import { abi } from "../utils/TransfersAbi.json";
const contractAddress = `0xB648499d759f60f6e40f493c5b843Cb8DAD92fd6`;
export const TransactionContext = createContext();
let transactionsFromBlockchain;
const getEthereumContract = () => {
  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    console.log(abi);
    const transactionContract = new ethers.Contract(
      contractAddress,
      abi,
      signer
    );
    console.log(`Address is : ${transactionContract.address}`);
    return transactionContract;
  }
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState();
  const [account, setAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
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

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert(`Install MetaMask`);
      }
      const { addressTo, amount, keyword, message } = formData;
      const contract = getEthereumContract();
      //up until here everything is fine
      console.log(`Amount is : ${ethers.utils.parseEther(amount)._hex}`);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: addressTo,
            value: ethers.utils.parseEther(amount)._hex,
            gas: "0x5208",
          },
        ],
      });
      setIsLoading(true);
      const transactioNHash = await contract.addToBlockchain(
        addressTo,
        ethers.utils.parseEther(amount)._hex,
        message,
        keyword
      );

      transactioNHash.wait(2);
      setIsLoading(false);
      console.log(transactioNHash);
      const transactionCount = await contract.getTransactionCount();
      console.log(transactionCount);

      localStorage.setItem("transactionCount", Number(transactionCount));
      setTransactionCount(Number(transactionCount));
      window.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    if (!ethereum) {
      return alert("Please install MetaMask");
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    setAccount(accounts[0]);
    getAllTransactions();
  };

  useEffect(() => {
    connectWallet();
    checkTransactions();
    getAllTransactions();
  }, []);

  const checkTransactions = async () => {
    try {
      const contract = getEthereumContract();
      const transactionCount = await contract.getTransactionCount();
      localStorage.removeItem("tranasctionCount");

      localStorage.setItem("tranasctionCount", transactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return;
      const contract = getEthereumContract();
      const tranasctions = await contract.getTransactions();
      console.log(tranasctions);
      const structuredTransaction = tranasctions.map((e) => ({
        adddressFrom: e.receiver,
        addressTo: e.sender,
        timestamp: new Date(e.timestamp.toNumber() * 1000).toLocaleString(),
        message: e.message,
        keyword: e.keyword,
        amount: parseInt(e.amount._hex) / 10 ** 18,
        id: e.timestamp + e.message,
      }));
      transactionsFromBlockchain = structuredTransaction;
      setTransactions(transactionsFromBlockchain);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        account,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        isLoading,
        transactionCount,
        loginData,
        setLoginData,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
