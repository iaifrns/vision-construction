import React from "react";
import { images } from "../../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import RoundedLinkButton from "../../components/RoundedLinkButton";

interface certificateType {
  icon: string;
  title: string;
  desc: string;
}

const Certificate: React.FC<certificateType> = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-4 md:w-[250px] max-md:w-full max-md:p-8">
      <Icon icon={icon} className="text-[80px]" />
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-gray-500 text-lg">{desc}</p>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="section-container flex max-md:flex-col md:justify-between md:gap-16 max-md:gap-8">
        <div className="flex flex-col w-full gap-8">
          <img src={images.IMG2} alt={images.IMG2} />
          <div className="flex w-full max-md:flex-col md:justify-between">
            <Certificate
              icon="token:build"
              title="Custom Designs"
              desc="Tailored building solutions that reflect your vision style"
            />
            <div className="h-full w-[1px] bg-gray-300"></div>
            <Certificate
              icon="arcticons:keyspace"
              title="Interior Plans"
              desc="Creating aesthetically pleasing functional interior spaces"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 h-fit">
          <p className="section-title">INDUSTRY CERTIFICATIONS</p>
          <span className="md:text-[52px] max-md:text-[32px] font-semibold">
            We Drive Client Success with Creative Building Designs
          </span>
          <p className="text-gray-500 md:text-xl max-lg:text-lg">
            At BuildGo, we pride ourselves on transforming our clients' visions
            into reality. Our innovative and client-focused designs ensure that
            every project stands out.
          </p>
          <RoundedLinkButton text="CONTACT US" icon="charm:arrow-up-right" />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
