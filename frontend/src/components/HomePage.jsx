import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Spinner } from './LoadingSpinner'
import { ethers } from 'ethers'
export const HomePage = () => {
  const commonStyles =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'
  const connectWalet = () => {
    ethers.connectWalet()
    console.log(`Connecting to Wallet`)
  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10 text-white">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
          </h1>

          <p className="text-left mt-5 font-light md:w-9/11 w-11/12 text--base italic">
            Explore the new Web3 world with Verius. Your gateaway to financial
            freedom.
          </p>
          <button
            type="button"
            onClick={connectWalet}
            className="font-semibold text-base text-white flex flex-row justify-center items-center my-5 bg-[#2952e3] p3 rounded-full cursor-pointer md:w-6/12 hover:bg-[#2546bd] italic h-12"
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-3 mt-10 w-full">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>
              Transaction Speeds
            </div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Blockchain</div>
            <div className={` ${commonStyles}`}>Web3</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Ethereum</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-full sm:w-72 my-5 eth-card white-glassmorphism"></div>
        </div>
      </div>
    </div>
  )
}
