import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './assets/layout/Layout.jsx';
import HomePage from './pages/homePages/homePage.jsx';
import ProjectPage from './pages/portfolio/ProjectPage.jsx';
import ColorSwitch from './pages/portfolio/project/web/colorSwitch/ColorSwitch.jsx';
import BullAndMoo from './pages/portfolio/project/web/bullAndMoo/BullAndMoo.jsx';
import MePage from './pages/hobbies/MePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import CvPrintPage from './pages/cv/CvPrintPage.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/cv" element={<CvPrintPage />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="Project" element={<ProjectPage />} />
                <Route path="ColorSwitch" element={<ColorSwitch />} />
                <Route path="BullAndMoo" element={<BullAndMoo />} />
                <Route path="me" element={<MePage />} />
                <Route path="developer" element={<Navigate to="/me?tab=developer" replace />} />
                <Route path="engineer" element={<Navigate to="/me?tab=engineer" replace />} />
                <Route path="travelers" element={<Navigate to="/me?tab=travelers" replace />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
