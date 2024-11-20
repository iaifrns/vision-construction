import React from "react";
import { galleryType } from "../types/gallery";

interface galleryItemType {
  gallery: galleryType;
  showFole: boolean;
  setHoverItem: (e:number)=>void;
  itemKey: number;
}
const GalleryItem: React.FC<galleryItemType> = ({ gallery, showFole, setHoverItem, itemKey }) => {
    const handleAsynHover = () => setHoverItem(itemKey)
  return (
    <div
      className={`relative w-full md:h-[600px] ${showFole ? "md:col-span-2 " : "col-span-1"}`}
      onMouseEnter={handleAsynHover}
    >
      <div
        className={`absolute h-full w-full ${
          !showFole && "bg-black opacity-35"
        } `}
      >
        <div className={` justify-center items-end p-4 h-full ${showFole ? "flex" : "hidden"}`}>
            <div className="flex flex-col md:gap-8 w-fit bg-primary p-4 rounded-lg">
                <p className="md:text-xl text-gray-300">{gallery.title}</p>
                <p className="md:text-2xl font-bold text-white">{gallery.naming}</p>
            </div>
        </div>
      </div>
      <img
        src={gallery.image}
        alt={gallery.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GalleryItem;
