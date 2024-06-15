// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrinterSelector from './components/PrinterSelector';
import ResetSelector from './components/ResetSelector';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Drivers</Link>
            <Link to="/resets">Resets</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<PrinterSelector />} />
            <Route path="/resets" element={<ResetSelector />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;