import { useState } from "react";
import { gallery } from "../../constants/gallery";
import RoundedLinkButton from "../../components/RoundedLinkButton";
import GalleryItem from "../../components/GalleryItem";

const GallerySection = () => {
  const [hoverItem, setHoverItem] = useState(0);
  return (
    <div className="flex justify-center items-center">
      <div className="section-container flex flex-col gap-8">
        <div className="grid md:grid-cols-5 max-md:grid-rows-4 gap-[2px]">
          {gallery.map((item, index) => (
            <GalleryItem
              key={index}
              gallery={item}
              showFole={index == hoverItem}
              setHoverItem={setHoverItem}
              itemKey={index}
            />
          ))}
        </div>
        <div className="flex max-md:flex-col justify-between w-full items-center max-md:gap-4">
          <p className="md:text-[40px] max-md:text-[30px] md:w-[40%] font-semibold max-md:text-center">
            Get Expert Construction Advice and a Free Quote
          </p>
          <RoundedLinkButton
            text="START A JOURNEY"
            icon="charm:arrow-up-right"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
