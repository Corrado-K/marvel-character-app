
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import HeroDetails from './routes/HeroDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/:id'} element={<HeroDetails />}/>

      </Routes>
    </Router>
  );
}

export default App;
