import Home from "./components/home/Home.jsx";
import AboutSection from "./components/about/AboutSection.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import Highlights from "./components/highlights/Highlights.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";

export default function HomePage() {
    return (
      <>
        <Home />
        <AboutSection />
        <Achievements /> 
        <Highlights />
        <Portfolio />
        <Contact /> 
      </>
    );
}


