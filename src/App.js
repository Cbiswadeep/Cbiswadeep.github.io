import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for dynamic page titles
import Home from './pages/Home';
import ResearchStatement from './pages/ResearchStatement';
import Teaching from './pages/Teaching';
import Blogs from './pages/Blogs';
import Talks from './pages/Talks';
import News from './pages/News';
import PublicationsList from "./pages/PublicationsList";
import CoV1 from './pages/blogs/cov_series/CoV1';
import CoV2 from './pages/blogs/cov_series/cov2';
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
      <Helmet>
        <title>My Website</title> {/* Default title */}
      </Helmet>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="nav">
          <div className="nav-content">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/research-statement">Research</NavLink>
            <NavLink to="/teaching">Teaching</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="/talks">Talks</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/publications">Publications</NavLink>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home | Biswadeep</title>
                  </Helmet>
                  <Home />
                </>
              }
            />

            {/* Research Statement */}
            <Route
              path="/research-statement"
              element={
                <>
                  <Helmet>
                    <title>Research Statement | Biswadeep</title>
                  </Helmet>
                  <ResearchStatement />
                </>
              }
            />

            {/* Teaching */}
            <Route
              path="/teaching"
              element={
                <>
                  <Helmet>
                    <title>Teaching | Biswadeep</title>
                  </Helmet>
                  <Teaching />
                </>
              }
            />

            {/* Blog Main Page */}
            <Route
              path="/blogs"
              element={
                <>
                  <Helmet>
                    <title>Blogs | Biswadeep</title>
                  </Helmet>
                  <Blogs />
                </>
              }
            />

            {/* Blog Series: Calculus of Variations */}
            <Route
              path="/blogs/cov_series/cov1"
              element={
                <>
                  <Helmet>
                    <title>Introduction to Calculus of Variations | Biswadeep</title>
                  </Helmet>
                  <CoV1 />
                </>
              }
            />
            <Route
              path="/blogs/cov_series/cov2"
              element={
                <>
                  <Helmet>
                    <title>Euler-Lagrange Equations | Biswadeep</title>
                  </Helmet>
                  <CoV2 />
                </>
              }
            />

            {/* Talks */}
            <Route
              path="/talks"
              element={
                <>
                  <Helmet>
                    <title>Talks | Biswadeep</title>
                  </Helmet>
                  <Talks />
                </>
              }
            />

            {/* News */}
            <Route
              path="/news"
              element={
                <>
                  <Helmet>
                    <title>News | Biswadeep</title>
                  </Helmet>
                  <News />
                </>
              }
            />

            {/* Publications */}
            <Route
              path="/publications"
              element={
                <>
                  <Helmet>
                    <title>Publications | Biswadeep</title>
                  </Helmet>
                  <PublicationsList />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
