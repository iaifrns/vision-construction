import RoundedLinkButton from "../../components/RoundedLinkButton";
import ServiceItem from "../../components/ServiceItem";
import { images } from "../../constants/images";
import { services } from "../../constants/services";

const ServiceSection = () => {
  return (
    <div className="bg-gray-800 w-full md:p-8 flex justify-center items-center overflow-hidden">
      <div className="section-container flex flex-col gap-8">
        <div className="flex max-md:flex-col w-full h-fit justify-between items-center max-md:gap-4">
          <div className="flex flex-col h-fit gap-4 max-md:m-2 max-md md:flex-1 ">
            <p className="section-title text-white border-white">
              OUR SERVICES
            </p>
            <p className="text-white md:text-[56px] max-md:text-[32px] font-semibold">
              Provide Quality Servieces
            </p>
            <RoundedLinkButton text="Contact us" icon="charm:arrow-up-right" />
          </div>
          <div className="md:w-[60%]">
            <img
              src={images.SERVICEIMG1}
              alt="service image 1"
              className="w-full md:h-[450px] object-cover"
            />
          </div>
        </div>
        <div className="flex md:justify-between max-md:flex-col">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
