import React from "react";
import { images } from "../../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

interface DesignType {
  icon: string;
  title: string;
  desc: string;
}

const DesignItem: React.FC<DesignType> = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-4 p-8 md:w-[300px] max-md:w-full rounded-lg bg-white">
      <Icon icon={icon} className="text-[58px]" />
      <p className="font-semibold text-[28px]">{title}</p>
      <p className="text-lg text-gray-500">{desc}</p>
    </div>
  );
};

const Design = () => {
  return (
    <div className="flex justify-center bg-gray-800 md:h-[75vh]">
      <div className="section-container relative">
        <div className="md:absolute w-full md:h-[600px]">
          <div className="flex gap-8 md:items-end md:h-full max-md:w-full max-md:justify-center max-md:items-center">
            <div className="flex max-md:flex-col gap-8 items-center">
              <img src={images.IMG1} alt={images.IMG1} />
              <DesignItem
                icon="carbon:text-link-analysis"
                title="Project Planning"
                desc="Ensuring every detail is considered designing"
              />
              <DesignItem
                icon="academicons:ideas-repec"
                title="Labor Preparation"
                desc="We take pride in our quality craftsmanship"
              />
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col md:justify-between max-md:gap-8 w-full">
          <div className="flex flex-col gap-8 md:w-[45%] max-md:w-full pt-20">
            <p className="section-title text-white">EXPERIENCE AREA</p>
            <p className="md:text-[52px] max-md:text-[32px] font-semibold text-white">
              Techniques for Outstanding Results
            </p>
          </div>
          <img
            src={images.IMG3}
            alt=""
            className="md:w-[45%] max-md:w-full md:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
