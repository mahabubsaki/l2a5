import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.svg";

const App = () => {

  return (
    <div className="min-h-[100dvh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} >
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;