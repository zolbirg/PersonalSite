
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import AboutSection from "./components/about/AboutSection.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import TestComp from "./components/testcomp/TestComp.jsx";
import Contact from "./components/contact/Contact.jsx";
// import ColorPalete from './assets/colororPlate/ColorPlate.jsx'

const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Home />
        <AboutSection />
        <Achievements />
        <Portfolio />
        <Contact />

        <TestComp />
        {/* <ColorPalete /> */}
      </main>
    
    </>
  );
};

export default App;
