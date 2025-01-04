import React from 'react';
import { Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import './News.css';

function News() {
  // Comprehensive news data structure with dates, links, images, and locations
  const newsItems = [
    {
      date: 'October 27, 2024',
      title: 'Double Award at Cognisense Annual Review 2024',
      content: 'Honored to receive both the Lightning Talk Award and the Best Poster Award at the Cognisense Annual Review 2024. My presentation focused on our recent advances in neuromorphic computing and adaptive AI systems.',
      type: 'award',
      image: '/images/cognisense_award.jpg', // You'll need to add your images
      links: [
        {
          text: 'Event Details',
          url: 'https://ece.gatech.edu/news/2024/10/cognisense-holds-second-annual-review'
        }
      ],
      location: 'Georgia Institute of Technology, Atlanta'
    },
    {
      date: 'July 15, 2024',
      title: 'MLCommons Rising Stars Award 2024',
      content: 'Selected as one of the top Ph.D. students and postdoctoral researchers in machine learning and systems, identifying potential future leaders in the field.',
      type: 'award',
      image: '/images/mlcommons-2024.jpg',
      links: [
        {
          text: 'MLCommons Announcement',
          url: 'https://mlcommons.org/2024/06/2024-mlc-rising-stars/'
        },
        {
          text: 'Georgia Tech News',
          url: 'https://www.cc.gatech.edu/news/phd-students-named-rising-stars-machine-learning'
        }
      ]
    },
    {
      date: 'April 3, 2024',
      title: 'Outstanding ECE Graduate Research Assistant Award',
      content: 'Received the Outstanding ECE Graduate Research Assistant Award for excellence in research contributions within the School of Electrical and Computer Engineering at Georgia Tech.',
      type: 'award'
    },
    {
      date: 'April 1, 2024',
      title: 'Best Presentation Award at Georgia Tech ECE Research Rally',
      content: 'Won the Best Presentation Award at the inaugural ECE Research Rally, where I presented our work on adaptive neuromorphic systems.',
      type: 'award',
      links: [
        {
          text: 'Event Coverage',
          url: 'https://ece.gatech.edu/news/2024/04/ece-gso-and-sac-team-host-first-research-rally'
        }
      ],
      location: 'Klaus Advanced Computing Building, Georgia Tech'
    },
    {
      date: 'March 27, 2024',
      title: 'Colonel Oscar P. Cleaver Award',
      content: 'Honored to receive the Colonel Oscar P. Cleaver Award for my PhD dissertation proposal at the 2024 Roger P. Webb Awards Program. Special thanks to my advisor Prof. Saibal Mukhopadhyay and committee members Prof. Suman Datta and Prof. Justin Romberg.',
      type: 'award',
      image: '/images/cleaver_2024.jpg',
      links: [
        {
          text: 'Awards Announcement',
          url: 'https://ece.gatech.edu/news/2024/04/2024-roger-p-webb-awards-honor-outstanding-students-faculty-and-staff'
        }
      ]
    },
    {
      date: 'March 28, 2024',
      title: 'Two Papers Accepted at L4DC 2024',
      content: 'Excited to announce we have two papers accepted in Learning for Dynamics & Control Conference (L4DC), 2024. Thanks to my collaborators Hemant Kumawat, Beomseok Kang and Harshit Kumar.',
      type: 'publication'
    },
    {
      date: 'January 11, 2024',
      title: 'ECE STEER Fellowship 2024',
      content: 'Awarded the ECE STEER Fellowship for teaching excellence and professional development in aspiring academics.',
      type: 'award'
    },
    {
      date: 'January 16, 2024',
      title: 'Paper Accepted at ICLR 2024',
      content: 'Our paper "Sparse Spiking Neural Network: Exploiting Heterogeneity in Timescales for Pruning Recurrent SNN" has been accepted at ICLR 2024 as a poster presentation.',
      type: 'publication',
      links: [
        {
          text: 'Paper',
          url: 'https://openreview.net/forum?id=your-paper-id'
        }
      ]
    },
    {
      date: 'June 8, 2023',
      title: 'Presentation at ICERM 2023',
      content: 'Presented our work on "Exploring Efficient AI with Spiking Neural Networks" at ICERM 2023.',
      type: 'talk',
      links: [
        {
          text: 'Watch Presentation',
          url: 'https://icerm.brown.edu/video_archive/3229'
        }
      ],
      location: 'ICERM, Brown University'
    }
  ];

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>News & Updates</h1>
        <p className="subtitle">Recent achievements, publications, and presentations</p>
      </header>

      <div className="news-timeline">
        {newsItems.map((item, index) => (
          <article key={index} className={`news-card ${item.type}`}>
            <div className="news-card-header">
              <div className="news-meta">
                <span className="news-date">
                  <Calendar className="icon" />
                  {item.date}
                </span>
                {item.location && (
                  <span className="news-location">
                    <MapPin className="icon" />
                    {item.location}
                  </span>
                )}
              </div>
              <h2>{item.title}</h2>
            </div>

            {item.image && (
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
            )}

            <div className="news-content">
              <p>{item.content}</p>
              
              {item.links && item.links.length > 0 && (
                <div className="news-links">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      {link.text}
                      <ExternalLink className="icon" />
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div className="news-type-indicator">
              <Award className="type-icon" />
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News;