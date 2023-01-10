import logo from "../../images/logo.png";
import { AiOutlineMail } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer h-fit">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} className="w-56" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white">Market</p>
          <p className="text-white">Exchange</p>
          <p className="text-white">Messaging</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-2xl text-center mb-3">Contact us at</p>
        <a href="mailto:support@verius.com">
          <p className="text-white text-sm text-center flex flex-row hover:cursor-pointer">
            <AiOutlineMail fontSize={23} className="flex flex-row mr-1 " />
            <p>support@verius.com</p>
          </p>
        </a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 mb-5"></div>
      <div className="flex flex-1 justify-between items-center w-full">
        <div className="text-white text-sm ml-10">@Diyan Yanev 2023</div>
        <div className="text-white text-sm mr-10">All rights reserved</div>
      </div>
    </div>
  );
};
