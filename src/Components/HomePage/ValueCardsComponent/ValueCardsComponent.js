import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './ValueCardsComponent.css';
import ReliableExpertise from '../../../assets/HomePageImages/ReliableExpertise.png'
import CraftedExcellence from '../../../assets/HomePageImages/CraftedExcellence.png'
import CompetitivePricing from '../../../assets/HomePageImages/CompetitivePricing.png'
import InnovativeQuality from '../../../assets/HomePageImages/InnovativeQuality.png'
import ValueIcon1 from '../../../assets/HomePageImages/ValueIcon1.png'
import ValueIcon2 from '../../../assets/HomePageImages/ValueIcon2.png'
import ValueIcon3 from '../../../assets/HomePageImages/ValueIcon3.png'
import ValueIcon4 from '../../../assets/HomePageImages/ValueIcon4.png'

//  Values data
const values = [
  { imageUrl: ReliableExpertise, icon: ValueIcon1, heading: "Reliable Expertise", text: "Trusted for top-notch residential and commercial roofing. Your satisfaction is our priority." },
  { imageUrl: CraftedExcellence, icon: ValueIcon2, heading: "Crafted Excellence", text: "Elevate your property with our commitment to excellence in roofing, siding, gutters, and windows." },
  { imageUrl: CompetitivePricing, icon: ValueIcon3, heading: "Competitive Pricing", text: "Experience excellence on a budget. We deliver top-notch solutions, ensuring your vision meets affordability" },
  { imageUrl: InnovativeQuality, icon: ValueIcon4, heading: "Innovative Quality", text: "Leading with quality and innovation, we transform spaces with durability and modern aesthetics." }
]

function ValueCardsComponent() {
  return (
    <div className='cards'>

      {/**    Web View */}
      <Row className='card-container'>
        {values.map((value, index) => (
          <Col key={index}>
            <Card className='value-cards'>
              <div>
                <div className='value-circle'>
                  <p className='value-icon'><img src={value.icon} alt='Ultimates Roofing LLC Icon' /></p>
                </div>
                <Card.Img className='value-img' src={value.imageUrl} variant="top" alt={value.heading} />
              </div>
              <Card.Body className='value-body'>
                <Card.Title className='value-title'>{value.heading}</Card.Title>
                <p className='value-text'>{value.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/**    Mobile view */}
      <Row className='carousel-container'>
        {values.map((value, index) => (
          <Col key={index}>
            <Card className='value-cards'>
              <Card.Body className='value-body'>
                <div className='value-circle1'>
                  <img src={value.icon} alt="Value Icon" />
                </div>
                <h2 className='value-title'>{value.heading}</h2>
                <p className='value-text'>{value.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ValueCardsComponent