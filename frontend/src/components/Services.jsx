import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { ServiceCard } from "./ServiceCard";
export const Services = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-14 w-2/3">
        <div className="flex-1 flex flex-col justify-start items-start w-full">
          <h1 className="flex text-white md:text-5xl sm:text-4xl py-1 text-gradient p-10 w-full">
            Services that
            <br />
            continue to impact the world <br />
            around us
          </h1>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start items-center mr-4">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Privacy and quality of our products remain unmatched"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Ownership"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="As a non-custodial solution, you are the only one that has access to your assets"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Trustless"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="The largest and most trusted platform in the Web3 space"
        />
      </div>
    </div>
  );
};
