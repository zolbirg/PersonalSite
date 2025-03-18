// import NavBar from "./components/navBar/NavBar.jsx";
// import Home from "./pages/homePages/components/home/Home.jsx";
// import AboutSection from "./components/about/AboutSection.jsx";
// import Achievements from "./components/achievements/Achievements.jsx";
// import Portfolio from "./components/portfolio/Portfolio.jsx";
// import TestComp from "./components/testcomp/TestComp.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import ColorPalete from './assets/colororPlate/ColorPlate.jsx'

import { Routes, Route } from "react-router-dom";
import Layout from "./assets/layout/Layout.jsx";
import HomePage from "./pages/homePages/homePage.jsx";
import ProjectPage from "./pages/portfolio/ProjectPage.jsx";
import ColorSwitch from "./pages/portfolio/project/web/colorSwitch/СolorSwitch.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <>
      {/* <NavBar />  */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Project" element={<ProjectPage />} />
          <Route path="ColorSwitch" element={<ColorSwitch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/*      
        <TestComp />
        <ColorPalete /> */}
    </>
  );
};

export default App;
