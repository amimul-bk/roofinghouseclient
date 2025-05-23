import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ValueCardsComponent.css';
import ReliableExpertise from '../../../assets/HomePageImages/ReliableExpertise.png';
import CraftedExcellence from '../../../assets/HomePageImages/CraftedExcellence.png';
import CompetitivePricing from '../../../assets/HomePageImages/CompetitivePricing.png';
import InnovativeQuality from '../../../assets/HomePageImages/InnovativeQuality.png';
import ValueIcon1 from '../../../assets/HomePageImages/ValueIcon1.png';
import ValueIcon2 from '../../../assets/HomePageImages/ValueIcon2.png';
import ValueIcon3 from '../../../assets/HomePageImages/ValueIcon3.png';
import ValueIcon4 from '../../../assets/HomePageImages/ValueIcon4.png';

const values = [
  {
    imageUrl: ReliableExpertise,
    icon: ValueIcon1,
    heading: 'Reliable Expertise',
    text: 'Trusted for top-notch residential and commercial roofing. Your satisfaction is our priority.',
  },
  {
    imageUrl: CraftedExcellence,
    icon: ValueIcon2,
    heading: 'Crafted Excellence',
    text: 'Elevate your property with our commitment to excellence in roofing, siding, gutters, and windows.',
  },
  {
    imageUrl: CompetitivePricing,
    icon: ValueIcon3,
    heading: 'Competitive Pricing',
    text: 'Experience excellence on a budget. We deliver top-notch solutions, ensuring your vision meets affordability',
  },
  {
    imageUrl: InnovativeQuality,
    icon: ValueIcon4,
    heading: 'Innovative Quality',
    text: 'Leading with quality and innovation, we transform spaces with durability and modern aesthetics.',
  },
];

function ValueCardsComponent() {
  useEffect(() => {
    const cards = document.querySelectorAll('.value-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="value-section-wrapper">
     
        <div className="cards">
          <Row className="gx-3 gy-4">
            {values.map((value, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6} xl={3}>
                <Card className="value-card">
                  <div className="value-card-inner">
                    <div className="value-circle">
                      <img src={value.icon} alt="Value Icon" className="value-icon" />
                    </div>
                    <Card.Img className="value-img" src={value.imageUrl} alt={value.heading} />
                    <Card.Body className="value-body">
                      <Card.Title className="value-title">{value.heading}</Card.Title>
                      <p className="value-text">{value.text}</p>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      
    </div>
  );
}

export default ValueCardsComponent;
