import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImageCarousel from "../components/ImageCarousel";
import HomeInfoSection from "../components/HomeInfoSection";
import Shipping from "../components/Shipping";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <HeroSection />
      <HomeInfoSection />
      <Shipping />
      <Footer />
    </div>
  );
};

export default Home;
