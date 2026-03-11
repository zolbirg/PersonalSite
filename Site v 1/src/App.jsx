import { Routes, Route } from 'react-router-dom';
import Layout from './assets/layout/Layout.jsx';
import HomePage from './pages/homePages/homePage.jsx';
import ProjectPage from './pages/portfolio/ProjectPage.jsx';
import ColorSwitch from './pages/portfolio/project/web/colorSwitch/ColorSwitch.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="Project" element={<ProjectPage />} />
                <Route path="ColorSwitch" element={<ColorSwitch />} />
                
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
