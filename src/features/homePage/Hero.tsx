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
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover pointer-events-none"
      >
        <source src={video.HEROVIDEO} type="video/mp4"></source>
        your browser donot support this
      </video>
    </div>
  );
};

export default Hero;
