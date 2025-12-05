import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProstatePage from './pages/ProstatePage';
import BladderPage from './pages/BladderPage';
import KidneyTumorsPage from './pages/KidneyTumorsPage';
import MedicalKidneyPage from './pages/MedicalKidneyPage';
import TestisPage from './pages/TestisPage';
import PenisPage from './pages/PenisPage';
import IHCPage from './pages/IHCPage';
import MolecularPage from './pages/MolecularPage';
import PitfallsPage from './pages/PitfallsPage';
import CasesPage from './pages/CasesPage';
import AssessmentPage from './pages/AssessmentPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const { theme, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="prostate" element={<ProstatePage />} />
          <Route path="bladder" element={<BladderPage />} />
          <Route path="kidney-tumors" element={<KidneyTumorsPage />} />
          <Route path="medical-kidney" element={<MedicalKidneyPage />} />
          <Route path="testis" element={<TestisPage />} />
          <Route path="penis" element={<PenisPage />} />
          <Route path="ihc" element={<IHCPage />} />
          <Route path="molecular" element={<MolecularPage />} />
          <Route path="pitfalls" element={<PitfallsPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="assessment" element={<AssessmentPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
