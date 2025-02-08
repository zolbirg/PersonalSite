
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Services from "./components/services/Services.jsx";
import Skills from "./components/skills/Skills.jsx";




const App = ()=>{


  return(
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Services />
    <Portfolio />

    <Contact />
    </>
  )
}

export default App;
