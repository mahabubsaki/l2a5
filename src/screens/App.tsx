import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";
import Client from "../components/Client";
import { Fragment } from "react";

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
    </Fragment>
  );
};

export default App;