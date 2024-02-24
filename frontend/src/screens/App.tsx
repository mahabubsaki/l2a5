import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";
import Client from "../components/Client";
import { Fragment } from "react";
import lowerbg from '../assets/bg.png';
import Services from "../components/Services";
import Events from "../components/Events";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import RecentEvents from "../components/RecentEvents";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


const App = () => {

  return (
    <Fragment>

      <div id="scroll-top" />
      <div className="min-h-[100dvh] bg-repeat pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} >
        <Navbar />
        <div className="mt-6">
          <HeroSection />
        </div>

      </div>
      <div className="mt-2">
        <Client />
      </div>
      <div className="min-h-[1000px] bg-no-repeat bg-cover bg-center pb-12" style={{ backgroundImage: `url(${lowerbg})` }}>
        <div className="mb-32">
          <Services />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <Events />
        </div>
        <div className="max-w-[1500px] mb-40 mx-auto">
          <Pricing />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <Gallery />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <Testimonial />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <RecentEvents />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <FAQ />
        </div>
        <div className="max-w-[1500px] mb-32 mx-auto">
          <ContactUs />
        </div>
      </div>
      <div className="bg-[rgba(17,22,23,0.85)] border border-[#334155]">
        <div className=" max-w-[1500px] mx-auto">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;