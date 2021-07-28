import { useState } from "react";
import "./App.scss";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ChallengeFooter from "./components/ChallengeFooter/ChallengeFooter";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleNav = (event) => {
    event.stopPropagation();
    if (menuState) {
      setMenuToggled((prevValue) => !prevValue);
    }
    setMenuState((prevValue) => !prevValue);
    if (!menuState && menuToggled) {
      setMenuToggled((prevValue) => !prevValue);
    }
  };

  return (
    <div className="container-fluid app__container">
      <Header
        menuState={menuState}
        menuToggled={menuToggled}
        toggleNav={toggleNav}
      />
      <main className="main" style={{ display: +menuState ? "none" : "" }}>
        <Hero />
        <FeaturesSection />
        <Banner />
      </main>
      <div
        className="app__footer"
        style={{ display: +menuState ? "none" : "" }}
      >
        <Footer>
          <ChallengeFooter></ChallengeFooter>
        </Footer>
      </div>
      {/* <div
        className="app__challengefooter"
        style={{ display: +menuState ? "none" : "" }}
      >
        <ChallengeFooter />
      </div> */}
    </div>
  );
}

export default App;
