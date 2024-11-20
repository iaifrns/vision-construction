import RoundedLinkButton from "../../components/RoundedLinkButton";
import { images } from "../../constants/images";
import PencentagesBox from "./PencentagesBox";

const Advices = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="section-container flex md:gap-24 max-md:gap-8 max-md:flex-col">
        <div className="md:w-[40%] flex flex-col gap-8">
          <p className="section-title">CONSTRUCTION ADVICES</p>
          <p className="md:text-[56px] max-md:text-[28px] font-semibold">Building Success With Expert Advisory Services</p>
          <p className="md:text-xl text-gray-700">
            With a focus on innovation and sustainability, we help you navigate
            complex challenges, ensuring
          </p>
          <RoundedLinkButton text="Contact us" icon="charm:arrow-up-right" />
        </div>
        <div className="flex flex-col justify-between md:flex-1 max-md:w-full max-md:gap-8">
            <img src={images.SERVICEIMG2} alt="service image 2" className="w-full md:h-[300px] object-cover" />
            <PencentagesBox pecentage="88" key={'86'} text="Building Construction" />
            <PencentagesBox pecentage="79" key={'26'} text="Interiors Design" />
        </div>
      </div>
    </div>
  );
};

export default Advices;
