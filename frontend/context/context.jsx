import React, { useState, useEffect, createContext } from "react";
import { BigNumber, ethers } from "ethers";
const { ethereum } = window;
import { abi } from "../utils/TransfersAbi.json";
const contractAddress = `0xB648499d759f60f6e40f493c5b843Cb8DAD92fd6`;
export const TransactionContext = createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  console.log(abi);
  const transactionContract = new ethers.Contract(contractAddress, abi, signer);
  console.log(`Address is : ${transactionContract.address}`);
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
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

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert(`Install MetaMask`);
      }
      const { addressTo, amount, keyword, message } = formData;
      const contract = getEthereumContract();
      //up until here everything is fine
      console.log(`Amount is : ${ethers.utils.parseEther(amount)._hex}`);
      // await ethereum.request({
      //   method: "eth_sendTransaction",
      //   params: [
      //     {
      //       from: account,
      //       to: addressTo,
      //       value: ethers.utils.parseEther(amount)._hex,
      //       gas: "0x5208",
      //     },
      //   ],
      // });
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
        isLoading,
        transactionCount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
