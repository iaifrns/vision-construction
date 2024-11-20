import { images } from "../../constants/images";
import React from "react";
import RoundedLinkButton from "../../components/RoundedLinkButton";

interface StatComponent {
  stat: string;
  title: string;
}

const StatComponent: React.FC<StatComponent> = ({ stat, title }) => {
  return (
    <div className="flex flex-col gap-4 p-4 items-center">
      <p className="font-bold md:text-[52px] max-md:text-[32px]">{stat}</p>
      <p className="font-bold">{title}</p>
    </div>
  );
};

const AboutEnterprise = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative md:w-fit max-md:w-full h-fit">
        <div className="absolute w-full h-full z-0 max-md:hidden">
          <div className="w-full h-full flex justify-end items-end">
            <img
              src={images.ABOUTIMG2}
              alt="enterprise image"
              className="w-[350px] h-[470px] object-cover"
            />
          </div>
        </div>
        <div className="section-container flex flex-col md:gap-16 w-full max-md:gap-8">
          <div className="flex max-md:flex-col md:justify-between w-full md:gap-16 max-md:gap-8">
            <img
              src={images.ABOUTIMG1}
              alt="enterprise image 1"
              className="md:w-[280px] md:h-[450px] max-md:h-[300px] object-cover"
            />
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col h-fit ">
                <p className="section-title border-black">ABOUT OUR COMPANY</p>
                <span className="font-semibold md:text-[56px] max-md:text-[32px]">
                  Leading Construction Innovation With Digital Consulting
                </span>
              </div>
              <div className="flex flex-col h-fit md:w-[550px] gap-8">
                <p className="md:text-lg font-semibold text-gray-600">
                  We focus on optimizing efficiency, managing risks, and
                  delivering innovative solutions tailored to meet unique
                  project needs and enhance productivity.
                </p>
                <RoundedLinkButton text="Contact us" icon="charm:arrow-up-right" />
              </div>
            </div>
          </div>

          <div className="flex max-md:flex-col p-4 bg-gray-200 justify-evenly md:w-[900px] max-md:w-full">
            <StatComponent title="CLIENT REVIEWS" stat="635+" />
            <StatComponent title="TEAM MEMEBERS" stat="120+" />
            <StatComponent title="COMPLETE PROJECTS" stat="678+" />
          </div>
          <img
              src={images.ABOUTIMG2}
              alt="enterprise image"
              className="md:w-[350px] md:h-[470px] object-cover md:hidden"
            />
        </div>
      </div>
    </div>
  );
};

export default AboutEnterprise;
