import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ResearchStatement from './pages/ResearchStatement';
import Teaching from './pages/Teaching';
import Blogs from './pages/Blogs';
import Talks from './pages/Talks';
import News from './pages/News';
import './App.css';

// Simple component to handle active navigation state
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? 'nav-link active' : 'nav-link'}>
      {children}
    </Link>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <div className="nav-content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/research-statement">Research</NavLink>
            <NavLink to="/teaching">Teaching</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/talks">Talks</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research-statement" element={<ResearchStatement />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;