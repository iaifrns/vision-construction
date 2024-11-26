import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AboutEnterprise from "../features/homePage/AboutEnterprise";
import Advices from "../features/homePage/Advices";
import Certifications from "../features/homePage/Certifications";
import Design from "../features/homePage/Design";
import EnterpriseProject from "../features/homePage/EnterpriseProject";
import GallerySection from "../features/homePage/GallerySection";
import Hero from "../features/homePage/Hero";
import ServiceSection from "../features/homePage/ServiceSection";
import { images, video } from "../constants/images";
import { imageLoader, videoLoader } from "../service/imageLoader";
import Loader from "../components/Loader";

const HomePage = () => {

  const [isloaderImg, setIsLoaderImg] = useState(true)
  const [isloaderVideo, setIsLoaderVideo] = useState(true)

  useEffect(()=>{
    const imgs = Object.values(images)
    const vid = Object.values(video)

    console.log(imgs)
    
    imageLoader(imgs).then(() => setIsLoaderImg(false)).catch((err) => console.log(err))
    videoLoader(vid).then(()=>setIsLoaderVideo(false)).catch((err) => console.log(err))
  },[])

  if(isloaderImg || isloaderVideo) {
    return (
      <Loader />
    )
  }

  return (
    <div className="flex flex-col md:gap-24 max-md:gap-8">
      <Hero />
      <AboutEnterprise />
      <ServiceSection />
      <Advices />
      <GallerySection />
      <Certifications />
      <Design />
      <EnterpriseProject />
      <Footer />
    </div>
  );
};

export default HomePage;
