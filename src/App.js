import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Galary from "./components/Galary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Galary />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
