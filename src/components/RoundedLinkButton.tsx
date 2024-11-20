import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface RoundedLinkButtonType {
  text: string;
  icon: string;
}

const RoundedLinkButton: React.FC<RoundedLinkButtonType> = ({ text, icon }) => {
  return (
    <div className="bg-primary p-4 flex gap-4 w-fit rounded-full items-center">
      <p className="md:text-xl font-bold text-white">{text}</p>
      <div className="p-2 rounded-full w-fit bg-black bg-opacity-10">
        <Icon icon={icon} className="text-white" />
      </div>
    </div>
  );
};

export default RoundedLinkButton;
