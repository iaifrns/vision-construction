import Footer from '../components/Footer'
import AboutEnterprise from '../features/homePage/AboutEnterprise'
import Advices from '../features/homePage/Advices'
import Certifications from '../features/homePage/Certifications'
import Design from '../features/homePage/Design'
import EnterpriseProject from '../features/homePage/EnterpriseProject'
import GallerySection from '../features/homePage/GallerySection'
import Hero from '../features/homePage/Hero'
import ServiceSection from '../features/homePage/ServiceSection'

const HomePage = () => {
  return (
    <div className='flex flex-col md:gap-24 max-md:gap-8'>
      <Hero />
      <AboutEnterprise />
      <ServiceSection />
      <Advices />
      <GallerySection />
      <Certifications />
      <Design/>
      <EnterpriseProject />
      <Footer />
    </div>
  )
}

export default HomePage
