import { images } from "../constants/images";
import { Icon } from "@iconify/react";

const TopBar = () => {
  return (
    <div className="flex justify-center items-center border-b-[1px] border-gray-400 p-4">
      <div className="w-full max-w-[1400px] flex md:justify-between max-md:justify-center">
        <div className="w-[120px] h-[70px]">
          <img
            src={images.LOGO}
            alt="Enterprise Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2  gap-8 rounded-full items-center bg-white pr-6 pl-6 hidden">
          <a href="" className="link-button">
            Home
          </a>
          <a href="/about_us" className="link-button">
            About us
          </a>
          <a href="contact_us" className="link-button">
            Contact us
          </a>
        </div>
        <div className="flex gap-4 items-center max-md:hidden">
          <Icon icon="ic:sharp-search" className="text-[32px] text-white" />
          <div className="flex gap-4 p-3 bg-black rounded-full pr-6 pl-6 items-center">
            <span className="text-white text-lg font-semibold">
              CONTACT US NOW
            </span>
            <div className="bg-gray-600 p-2 rounded-full">
              <Icon
                icon="charm:arrow-up-right"
                className="text-white text-lg"
              />
            </div>
          </div>
          <div className="bg-primary p-3 rounded-full">
            <Icon
              icon="game-icons:jigsaw-box"
              className="text-3xl text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
