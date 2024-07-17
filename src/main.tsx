import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Career from './routes/Career';
import Projects from './routes/Projects';
import Hire from './routes/Hire';
import './index.css';
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
