import { addressShortener } from "../../utils/constants";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
export const TransactionCard = ({
  addressTo,
  addressFrom,
  adddressFrom,
  message,
  timestamp,
  keyword,
  amount,
  id,
  url,
}) => {
  return (
    <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[340px] flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3 ">
        <div className="flex flex-col justify-start w-full mb-6 p-2">
          <a
            href={`https://goerli.etherscan.io/address/${
              addressFrom || adddressFrom
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base ">
              From: {addressShortener(addressFrom || adddressFrom)}
            </p>
          </a>
          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base ">
              To: {addressShortener(addressTo)}
            </p>
          </a>
          <p>Amount: {amount}</p>
          {message && (
            <div>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </div>
          )}
          <img
            src={
              useFetch(keyword) ||
              url ||
              `https://media1.giphy.com/media/MagSgolK3ScWvtHAB4/giphy.gif?cid=790b7611d3a011862f65e41f4071dcc183e81416ff6d81af&rid=giphy.gif&ct=g`
            }
            className="w-full h-64 2xl:h-96 shadow-lg object-cover"
          />
        </div>
        <div className="bg-black p-2 px-5 w-max rounded-2xl -mt-10 shadow-2xl">
          <p className="text-[#37c7da] font-bold items-center">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
