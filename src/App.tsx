import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Pages/Home';
//import BenSan14Page from './Pages/BenSan14';
//import TheMightySinghPage from './Pages/TheMightySingh';
//import HendrixPage from './Pages/Hendrix';
import FighterPageDynamic from "./Pages/FighterPageDynamic";
import FighterPageFull from './Pages/FighterPageFull';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fighter/:id" element={<FighterPageDynamic />} />
        <Route path="/FighterPageFull" element={<FighterPageFull />} />
        {/* <Route path="/fighter/BenSan14" element={<BenSan14Page />} />
        <Route path="/fighter/TheMightySingh" element={<TheMightySinghPage />} />
        <Route path="/fighter/Hendrix" element={<HendrixPage />} /> */}
        {/* Add more routes for other fighters as needed */}
      </Routes>
    </Router>
  );
}

export default App;