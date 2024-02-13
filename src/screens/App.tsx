import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";
import Client from "../components/Client";
import { Fragment } from "react";
import lowerbg from '../assets/bg.png';
import Services from "../components/Services";

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
      <div className="min-h-[500px] bg-no-repeat bg-cover bg-center mb-20 pb-12" style={{ backgroundImage: `url(${lowerbg})` }}>
        <Services />
      </div>
    </Fragment>
  );
};

export default App;