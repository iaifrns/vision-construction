import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";

const HeroBody = () => {
  return (
    <div className="flex flex-col section-container">
      <span className="section-title text-white">
        EXPERT SOLUTIONS
      </span>
      <span className="text-white font-bold md:text-[140px] max-md:text-[56px]">SHASPING FUTURE</span>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-6">
          <span className="font-rubik md:text-[80px] font-bold text-white max-md:text-[40px]">
            Architecture
          </span>
          <div className="bg-primary p-4 rounded-full w-fit flex items-center gap-4">
            <span className="text-white font-bold md:text-2xl">Our Services</span>
            <div className="p-2 rounded-full w-fit bg-black bg-opacity-10">
              <Icon
                icon="charm:arrow-up-right"
                className="text-white md:text-xl"
              />
            </div>
          </div>
        </div>
        <img
          src={images.IMG1}
          alt="Construction Agency"
          className="w-[140px] h-[140px] max-md:hidden"
        />
      </div>
    </div>
  );
};

export default HeroBody;
