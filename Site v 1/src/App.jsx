import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./components/home/Home.jsx";
// import About from "./components/aboutComponent/About.jsx";
// import Skills from "./components/about/skills/Skills.jsx";
// import Qualification from "./components/about/Qualification/Qualification.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";

import TestComp from "./components/testcomp/TestComp.jsx";
// import Contact from "./components/contact/Contact.jsx";
import ColorPalete from './assets/colororPlate/ColorPlate.jsx'
import AboutSection from "./components/about/AboutSection.jsx";



const App = ()=>{
 
  return(
    < >
      <NavBar />
      <main>
          <Home />
          {/* <About /> */}
          <AboutSection />
          
          {/* <Skills /> */}
          {/* <Qualification /> */}
          <Achievements />
          <Services />
          <Portfolio />
          <TestComp />
          {/* <Contact /> */}
          <Footer />
    <ColorPalete />
      </main>
        
          
    </>
  )
}

export default App;
