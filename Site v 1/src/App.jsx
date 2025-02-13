import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/skills/Skills.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Achievements from "./components/achievements/Achievements.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Footer from "./components/footer/Footer.jsx";

import Services from "./components/services/Services.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import ColorPalete from './assets/colororPlate/ColorPlate.jsx'




const App = ()=>{

 
  return(
    < >
      <Header />
      <main>
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Achievements />
          <Services />
          <Portfolio />

          {/* <Contact /> */}
          <Footer />
    {/* <ColorPalete /> */}
      </main>
        
    </>
  )
}

export default App;
