import { useEffect, useState } from "react";
import { images } from "../constants/images";
import RoundedLinkButton from "./RoundedLinkButton";
import { Icon } from "@iconify/react/dist/iconify.js";

const Icons = ({ icon }: { icon: string }) => {
  return (
    <div className="p-2 bg-gray-300 rounded-full h-fit">
      <Icon icon={icon} />
    </div>
  );
};

const Footer = () => {
  const [image, setImage] = useState(images.FOOTERIMG);

  useEffect(() => {
    const screenSize = window.screen.width;
    if (screenSize < 600) {
      setImage(images.FOOTERIMG2);
    }
  }, []);
  return (
    <div className="flex items-center justify-center w-full bg-black bg-opacity-5">
      <div className="section-container flex flex-col gap-8">
        <div className="relative w-full h-[400px]">
          <div className="absolute h-full w-full bg-black rounded-3xl bg-opacity-50">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 md:gap-4 max-md:gap-16">
              <p className="md:text-[56px] max-md:text-[32px] text-white text-center font-semibold md:w-[70%]">
                Join Our Community and Access Exclusive Insights Today
              </p>
              <RoundedLinkButton
                text="Join us Now"
                icon="charm:arrow-up-right"
              />
            </div>
          </div>
          <img
            src={image}
            alt={image}
            className="w-full object-cover h-full rounded-3xl"
          />
        </div>

        <div className="w-full flex max-md:flex-col justify-between items-center">
          <div className="flex md:w-[600px] max-md:w-full md:items-center max-md:flex-col max-md:p-4">
            <img
              src={images.LOGO}
              alt={images.LOGO}
              className="md:h-[180px] max-md:h-[100px] object-contain w-fit"
            />
            <p className="text-gray-600 md:text-sm max-md:text-xs">
              We specialize in high-quality interior construction, transforming
              spaces with innovative designs and expert craftsmanship. From
              residential to commercial projects, we deliver tailored solutions
              that combine functionality, aesthetics, and attention to detail,
              ensuring every space meets our clients' unique needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Contact</p>
            <p className="text-2xl text-gray-600">Email: Testemail@gamil.com</p>
            <p className="text-2xl text-gray-600">Phone: +237 698 789 345</p>
          </div>
        </div>

        <div className="border-t border-gray-500 flex max-md:flex-col justify-between items-center">
          <p className="text-gray-600 text-lg p-8">
            Copyright 2024 – All Rights Reserved By{" "}
            <span className="text-primary">WillsTech</span>
          </p>
          <div className="flex gap-4">
            <Icons icon="line-md:facebook" />
            <Icons icon="iconoir:instagram" />
            <Icons icon="proicons:x-twitter" />
            <Icons icon="icon-park-outline:instagram-one" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
