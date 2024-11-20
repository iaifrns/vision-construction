import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export interface ServiceItemType {
  icon: string;
  title: string;
  desc: string;
}

const ServiceItem: React.FC<ServiceItemType> = ({ icon, title, desc }) => {

    const [hover, setHover] = useState(false)
  return (
    <div
      className="flex flex-col justify-between max-md:m-2 md:w-[400px] h-[380px] rounded-lg border border-gray-300 p-8 cursor-default hover:bg-secondary"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={()=>{
        setHover(false)
      }}
    >
      <Icon icon={icon} className={`text-[100px] ${hover ? 'text-white' : 'text-secondary'}`} />
      <div className="flex flex-col gap-4">
        <p className="text-[28px] text-white font-semibold">{title}</p>
        <p className={`${hover ? 'text-white' : 'text-gray-300'}`}>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
