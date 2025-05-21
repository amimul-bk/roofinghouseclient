import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import HomeRoofing from '../../../assets/HomePageImages/Residential_roofing_services_ohio_USA_ultimatesroofingllc.jpg';
import CommercialRoofing from '../../../assets/HomePageImages/Commercial_roofing_service_ohio_USA_ultimatesroofingllc.jpg';
import SidingEnhancement from '../../../assets/HomePageImages/Siding_enhancements_service_ohio_USA_ultimatesroofingllc.jpg';
import GutterSystems from '../../../assets/HomePageImages/Gutter_systems_servic_Ohio_USA_ultimatesroofingllc.jpg';
import WindowServices from '../../../assets/HomePageImages/WindowServicesohio_ultimatesroofing.jpg';
import { FaArrowRight } from "react-icons/fa6";
import './ServiceCardsComponent.css';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    image: HomeRoofing,
    title: 'Residential Roofing',
    description: "We specialise in insurance claims and retail estimates for residential properties, offering expert guidance and accurate assessments to homeowners and industry professionals.",
    path: '/residential-roofing',
  },
  {
    image: CommercialRoofing,
    title: 'Commercial Roofing',
    description: 'We specialise in insurance claims and retail estimates for commercial properties, providing expert guidance and accurate assessments to professionals in the industry.',
    path: '/commercial-roofing',
  },
  {
    image: SidingEnhancement,
    title: 'Siding Enhancements',
    description: "Improve your home's curb appeal with professional siding services in Ohio. We offer a perfect fusion of stylish, durable siding solutions to fit your property needs.",
    path: '/siding-enhancements',
  },
  {
    image: GutterSystems,
    title: 'Gutter Systems',
    description: "Keep your property safe with reliable gutter systems in Ohio. Our expert team installs and maintains gutters that protect your home from water damage.",
    path: '/gutter-systems',
  },
  {
    image: WindowServices,
    title: 'Window Services',
    description: 'Upgrade your property with high-quality window services in Ohio. We provide expert installation and repair for energy-efficient, stylish windows.',
    path: '/window-services',
  },
];

function ServiceCardsComponent() {
  const navigate = useNavigate();

  return (
    <div className='cards'>
    
        <div className='section'>
          <h1 className='service-heading'>Our Services</h1>
          <p className='service-text'>
            From Home and Commercial Roofing to Siding, Gutters, and Windows, our services redefine precision and style.
            Elevate your property with our commitment to unparalleled craftsmanship.
          </p>
        </div>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} md={6} xl={4} className="d-flex justify-content-center mb-4 ">
              <Card className='hover-effect'>
                <Card.Img className='card-img' src={service.image} variant="top" alt={service.title} />
                <Card.Body>
                  <h2 className='card-title'>{service.title}</h2>
                  <Row>
                    <Col className='card-text'>
                      {service.description}
                    </Col>
                    <Col xs={2} onClick={() => { navigate(service.path) }} className='icon-disable'>
                      <div className='icon-circle'>
                        <FaArrowRight className='card-icon' />
                      </div>
                    </Col>
                  </Row>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     
    </div>
  );
}

export default ServiceCardsComponent;
