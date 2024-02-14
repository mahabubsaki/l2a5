import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";
import Client from "../components/Client";
import { Fragment } from "react";
import lowerbg from '../assets/bg.png';
import Services from "../components/Services";
import Events from "../components/Events";
import Pricing from "../components/Pricing";

const App = () => {

  return (
    <Fragment>


      <div className="min-h-[100dvh] bg-no-repeat pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} >
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
        <div className="max-w-[1500px] mx-auto">
          <Pricing />
        </div>
      </div>
    </Fragment>
  );
};

export default App;