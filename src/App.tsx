import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BenSan14Page from './Pages/BenSan14';
import TheMightySinghPage from './Pages/TheMightySingh';
import HendrixPage from './Pages/Hendrix';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fighter/BenSan14" element={<BenSan14Page />} />
        <Route path="fighter/TheMightySingh" element={<TheMightySinghPage />} />
        <Route path="fighter/Hendrix" element={<HendrixPage />} />
      </Routes>
    </Router>
  );
}

export default App;