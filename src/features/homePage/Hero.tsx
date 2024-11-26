import HeroBody from "../../components/HeroBody";
import TopBar from "../../components/TopBar";
import { video } from "../../constants/images";

const Hero = () => {
  return (
    <div className="relative w-full md:h-[920px] max-md:h-[750px]">
      <div className="absolute h-full w-full bg-black bg-opacity-40 ">
        <div className="flex flex-col w-full h-full">
          <TopBar />
          <div className="h-full w-full flex justify-center items-center">
            <HeroBody />
          </div>
        </div>
      </div>
      <video
        className="h-full w-full p-0 pointer-events-none object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={video.HEROVIDEO}></source>
      </video>
    </div>
  );
};

export default Hero;
