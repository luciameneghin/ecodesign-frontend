import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImageCarousel from "../components/ImageCarousel";
import HomeInfoSection from "../components/HomeInfoSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <HeroSection />
      <HomeInfoSection />
    </div>
  );
};

export default Home;
