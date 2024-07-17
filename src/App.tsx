import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Pakiety from './components/Pakiety';
import PromotionalOffers from './components/PromotionalOffers';
import Cennik from './components/Cennik';
import Kontrola from './components/Kontrola';
import Info from './components/Info';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Pakiety />
        <PromotionalOffers />
        <Cennik />
        <Kontrola />
        <Info />
      </main>
      <Footer />
    </>
  );
}

export default App;
