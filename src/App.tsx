import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Pakiety from "./components/Pakiety";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Pakiety />
      </main>
      <Footer />
    </>
  );
}

export default App;
