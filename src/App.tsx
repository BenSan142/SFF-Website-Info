import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;