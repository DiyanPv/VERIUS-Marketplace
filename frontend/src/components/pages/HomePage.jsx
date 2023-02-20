import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { InputForm } from "../Form";
import { BsInfoCircle } from "react-icons/bs";
import { Spinner } from "../Spinner/LoadingSpinner";
import { ethers } from "ethers";
import { TransactionContext } from "../../../context/context";
import { useContext } from "react";

export const HomePage = () => {
  const {
    connectWallet,
    account,
    sendTransaction,
    handleChange,
    formData,
    transactionCount,
    isLoading,
  } = useContext(TransactionContext);
  const { addressTo, message, amount, keyword } = formData;
  let provider;
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  let signer;
  const InputArray = [
    {
      placeholder: "Address To",
      name: "addressTo",
      type: "text",
      value: addressTo,
      key: 1,
    },
    {
      placeholder: "Enter Message",
      name: "message",
      type: "text",
      value: message,
      key: 2,
    },
    {
      placeholder: "Amount (ETH)",
      name: "amount",
      type: "number",
      value: amount,
      key: 3,
    },
    {
      placeholder: "Keyword",
      name: "keyword",
      type: "text",
      value: keyword,
      key: 4,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) {
      return;
    }
    sendTransaction();
  };

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4 w-full md:ml-16">
        <div className="flex flex-1 justify-start flex-col md:mr-10 text-white">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
          </h1>

          <p className="text-left mt-5 font-light md:w-9/11 w-11/12 text--base italic">
            Explore the new Web3 world with Verius. Your gateaway to financial
            freedom.
          </p>
          {!account && (
            <button
              type="button"
              onClick={connectWallet}
              className="font-semibold text-base text-white flex flex-row justify-center items-center my-5 bg-[#2952e3] p3 rounded-full cursor-pointer md:w-6/12 hover:bg-[#2546bd] italic h-12"
            >
              Connect Wallet
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-3 mt-10 w-full">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Self-Custody</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Blockchain</div>
            <div className={` ${commonStyles}`}>Web3</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Ethereum</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 items-start flex-row flex justify-between rounded-x1 h-40 w-full sm:w-72 my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={16} color="#fff" />
              </div>
              <div>
                <p className="text-white font-semibold font-light text-sm">
                  Address:
                </p>
                <p className="text-white font-light text-sm">
                  {account? `${String(account).substring(0, 7)}...${String(
                    account
                  ).substring(20)}` : `Not Connected to Metamask`}
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            {InputArray.map((element) => (
              <InputForm
                placeholder={element.placeholder}
                name={element.name}
                type={element.type}
                handleChange={handleChange}
                value={element.value}
                key={element.name}
              />
            ))}
            <div className="h-[1px] w-full bg-gray-400" />
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-60 rounded-full bg-fuchsia-500 mt-3 hover:bg-fuchsia-800 border-[2px] p-2 border-[#3d4f7c]
              "
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
