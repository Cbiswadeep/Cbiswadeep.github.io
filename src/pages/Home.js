import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCog, 
  Network, 
  Shield, 
  Cpu, 
  ExternalLink, 
  ChevronRight, 
  Mail, 
  Award 
} from 'lucide-react';
import './Home.css';

function Home() {
  // Research themes showcasing your key areas of focus
  const researchThemes = [
    {
      title: 'Learning as Control Systems',
      description: 'Reimagining AI as a dynamical system that evolves and adapts like living organisms. Our algorithms achieve 70% better efficiency by embedding adaptability at their core.',
      icon: BrainCog,
      color: 'theme-purple'
    },
    {
      title: 'Dynamic Neural Architecture',
      description: 'Building neural networks that reshape themselves in real-time, like a brain forming new pathways. Our SPLR model processes data 70× faster while using less energy.',
      icon: Network,
      color: 'theme-blue'
    },
    {
      title: 'Efficient Computing',
      description: 'Designing specialized hardware that processes AI like a brain processes thoughts. Our FAST-CIM system achieves unprecedented efficiency of 268 TOPS/W.',
      icon: Cpu,
      color: 'theme-red'
    }
  ];

  // Latest news and achievements to display on the homepage
  const news = [
    {
      date: 'October 27, 2024',
      content: 'Received the Lightning Talk Award and Best Poster Award at Cognisense Annual Review 2024',
      type: 'award'
    },
    {
      date: 'July 15, 2024',
      content: 'Received the MLCommons Rising Stars Award 2024',
      type: 'award',
      link: 'https://mlcommons.org/2024/06/2024-mlc-rising-stars/'
    },
    {
      date: 'April 3, 2024',
      content: 'Received the Outstanding ECE Graduate Research Assistant Award',
      type: 'award'
    }
  ];

  return (
    <div className="home">
      {/* Profile Header Section */}
      <header className="home-header">
        <div className="profile-container">
          <img src="profile.png" alt="Biswadeep Chakraborty" className="profile-pic" />
          <div className="header-content">
            <h1>Biswadeep Chakraborty</h1>
            <p className="title">Ph.D. Candidate in Electrical and Computer Engineering</p>
            <p className="subtitle">Georgia Institute of Technology</p>
            <div className="header-links">
              <a href="https://scholar.google.com/citations?user=8soIjY8AAAAJ&hl=en&authuser=1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="header-link">
                <Award className="link-icon" />
                Google Scholar
              </a>
              <span className="divider">•</span>
              <a href="mailto:biswadeep@gatech.edu"
                 className="header-link">
                <Mail className="link-icon" />
                Email
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Research Vision Section */}
      <section className="vision-section">
        <h2>Research Vision</h2>
        <p className="vision-text">
          My research introduces a fundamentally new perspective: treating AI as a dynamical system that 
          naturally evolves and adapts. While current AI systems excel in controlled environments, they 
          struggle with unpredictable real-world dynamics. I develop frameworks that embed adaptability 
          and resilience within the model's core, enabling continuous, asynchronous learning and 
          self-sustaining operation.
        </p>
      </section>

      {/* Research Themes Grid */}
      <section className="themes-section">
        <h2>Research Focus</h2>
        <div className="themes-grid">
          {researchThemes.map((theme, index) => {
            const IconComponent = theme.icon;
            return (
              <div key={index} className={`theme-card ${theme.color}`}>
                <div className="theme-header">
                  <div className="icon-container">
                    <IconComponent className="theme-icon" />
                  </div>
                  <h3>{theme.title}</h3>
                </div>
                <p>{theme.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Statement Link */}
      <section className="cta-section">
        <Link to="/research-statement" className="cta-button">
          View Full Research Statement
          <ChevronRight className="cta-icon" />
        </Link>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-container">
          {news.map((item, index) => (
            <div key={index} className="news-item" data-type={item.type}>
              <span className="news-date">{item.date}</span>
              <div className="news-content">
                <p>{item.content}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="news-link"
                  >
                    Read More <ExternalLink className="link-icon-small" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="news-view-all">
          <Link to="/news" className="view-all-button">
            View All News and Updates
            <ChevronRight className="button-icon" />
          </Link>
        </div>
      </section>


    </div>
  );
}

export default Home;