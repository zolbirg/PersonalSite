
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Services from "./components/services/Services.jsx";
import Skills from "./components/skills/skills/Skills.jsx";

// import { Fragment } from "react";


// 2:07

const App = ()=>{

 
  return(
    < >
      <Header />
      <main>
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />

          <Contact />
      </main>
        
    </>
  )
}

export default App;
