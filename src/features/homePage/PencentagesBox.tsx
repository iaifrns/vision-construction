import React from "react";

interface PencentagesBoxType {
  pecentage: string;
  text: string
}

const PencentagesBox: React.FC<PencentagesBoxType> = ({ pecentage, text }) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className={`flex justify-between md:text-2xl max-md:text-lg`} style={{ width: `${pecentage}%` }}>
        <p>{text}</p>
        {pecentage}%
      </div>
      <div className="w-full bg-gray-400">
        <div
          className={`bg-primary p-[5px]`}
          style={{ width: `${pecentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PencentagesBox;
