import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { InputForm } from './Form'
import { BsInfoCircle } from 'react-icons/bs'
import { Spinner } from './LoadingSpinner'
import { ethers } from 'ethers'
export const HomePage = () => {
  const InputArray = [
    {
      placeholder: 'Address To',
      name: 'addressTo',
      type: 'text',
      handleChange: () => {},
    },
    {
      placeholder: 'Enter Message',
      name: 'message',
      type: 'text',
      handleChange: () => {},
    },
    {
      placeholder: 'Amount (ETH)',
      name: 'amount',
      type: 'number',
      handleChange: () => {},
    },
    {
      placeholder: 'Keyword',
      name: 'keyword',
      type: 'text',
      handleChange: () => {},
    },
  ]
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
                <p className="text-white font-light text-sm">0xsa....sdsds</p>
              </div>
            </div>
          </div>
          <div className="text-white p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            {InputArray.map((element) => (
              <InputForm
                placeholder={element.placeholder}
                key={Math.random() + element + Math.random(10)}
                name={element.name}
                type={element.type}
                handleChange={element.handleChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
