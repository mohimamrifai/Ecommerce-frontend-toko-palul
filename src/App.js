
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './common/Header/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
