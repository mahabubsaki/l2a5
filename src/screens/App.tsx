import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";

const App = () => {

  return (
    <div className="min-h-[100dvh] bg-no-repeat pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} >
      <Navbar />
      <div className="mt-6">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;