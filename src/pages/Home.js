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
  Award,
  Github,
  Linkedin,
  FileIcon,
  BookIcon,
  ScrollIcon
} from 'lucide-react';
import './Home.css';

function Home() {
  // Research themes showcasing your key areas of focus
  const researchThemes = [
    {
      title: 'Learning as Adaptive Control Systems',
      description: 'Pioneering a new paradigm that treats AI as dynamical systems that naturally evolve and adapt. Our Heterogeneous Recurrent SNNs achieve autonomous stability with 57% neuron sparsity while maintaining high performance.',
      icon: BrainCog,
      color: 'theme-purple'
    },
    {
      title: 'Dynamic Model Architecture',
      description: 'Developing architectures that adapt to unpredictable environments. Our SPLR model achieves 70× reduction in FLOPs through event-based computing, while FAST-CIM delivers 268 TOPS/W efficiency on ImageNet.',
      icon: Network,
      color: 'theme-blue'
    },
    {
      title: 'Model-Hardware Co-Design',
      description: 'Creating specialized platforms for adaptive AI through hardware-algorithm co-design. Our MONETA platform achieves 3× power reduction, while integrating efficient memory-compute for real-time processing.',
      icon: Cpu,
      color: 'theme-red'
    }
  ];
  const quickLinks = [
    {
      title: 'CV',
      icon: FileIcon,
      link: './Biswadeep_CV_2025_Jan.pdf'
    },
    {
      title: 'Publications',
      icon: BookIcon,
      link: '/publications'
    },
    {
      title: 'Research',
      icon: ScrollIcon,
      link: '/research-statement'
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
              <a href="https://www.linkedin.com/in/biswadeepc/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="header-link">
                <Linkedin className="link-icon" />
                LinkedIn
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
        
        {/* Quick Links Section */}
        <div className="quick-links">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link key={index} to={link.link} className="quick-link-button">
                <IconComponent className="quick-link-icon" />
                {link.title}
              </Link>
            );
          })}
        </div>
      </header>



      {/* Research Vision Section */}
      <section className="vision-section">
        <h2>Research Vision</h2>
        <div className="vision-content">
          <div className="vision-challenge">
            <h3>Problem</h3>
            <p>
              Current AI systems <span className="emphasis">excel in controlled environments</span> but 
              <span className="emphasis"> fail in unpredictable real-world settings</span>, requiring 
              <span className="text-red-600"> constant retraining and human intervention</span>.
            </p>
          </div>
          
          <div className="vision-solution">
            <h3>Innovation</h3>
            <p>
              Treating AI as <span className="emphasis">dynamical systems</span> that 
              <span className="emphasis"> naturally evolve and adapt</span>, enabling 
              <span className="text-blue-600"> continuous learning without human intervention</span>.
            </p>
          </div>
          
          <div className="vision-impact">
            <h3>Applications</h3>
            <p>
              Enabling <span className="emphasis">resilient AI</span> for 
              <span className="emphasis"> space robotics</span>, 
              <span className="emphasis"> disaster response</span>, and 
              <span className="text-green-600"> mission-critical autonomous systems</span>.
            </p>
          </div>
        </div>
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