import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './routes/Home';
import Career from './routes/Career';
import Projects from './routes/Projects';
import Hire from './routes/Hire';
import './index.css';
import './tailwind.css';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <div className="page">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hire" element={<Hire />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
