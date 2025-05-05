import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AboutMainImage from '../../assets/AboutPageImages/AboutMainImage.png';
import AboutPageImage from '../../assets/AboutPageImages/AboutPageImage.png';
import './AboutPage.css';
import CardsComponent from '../HomePage/CardsComponent/CardsComponent';
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import { Helmet } from 'react-helmet';

const reviews = [
  { question: 'What roofing services does Ultimates Roofing provide?', answer: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { question: 'How experienced is Ultimates Roofing in the industry?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'What sets Ultimates Roofing apart from other roofing companies?', answer: 'Exceptional service! From start to finish, Ultimates Roofing prioritized professionalism. Cleanup was thorough, leaving my property in superior condition.' },
  { question: 'How can I request an estimate for my roofing project?', answer: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { question: 'Can Ultimates Roofing handle emergency repairs?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'What types of roofing materials does Ultimates Roofing use?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' },
  { question: 'Does Ultimates Roofing provide warranties for its services?', answer: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' }
]

function AboutPage() {
  const navigate = useNavigate();
  const [countExperience, setCountExperience] = useState(0);
  const [countWarranty, setCountWarranty] = useState(0);
  const [countWarranty1, setCountWarranty1] = useState(0);
  const [countQuality, setCountQuality] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const countingRef = useRef(null);

  // Intersection observer callback
  const handleIntersection = (entries) => {
    const entry = entries[0];
    setIsIntersecting(entry.isIntersecting);
  };

  // Effect to set up the intersection observer
  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
         // eslint-disable-next-line
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  // Effect to count experience and warranty years
  useEffect(() => {
    if (isIntersecting) {
      const intervalExperience = setInterval(() => {
        setCountExperience((prevCount) => (prevCount < 15 ? prevCount + 1 : prevCount));
      }, 200);

      const intervalWarranty = setInterval(() => {
        setCountWarranty((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
      }, 200);

      const intervalWarranty1 = setInterval(() => {
        setCountWarranty1((prevCount) => (prevCount < 25 ? prevCount + 1 : prevCount));
      }, 200);

      const intervalQuality = setInterval(() => {
        setCountQuality((prevCount) => (prevCount < 100 ? prevCount + 2 : prevCount));
      }, 200);

      return () => {
        clearInterval(intervalExperience);
        clearInterval(intervalWarranty);
        clearInterval(intervalWarranty1);
        clearInterval(intervalQuality);
      };
    }
  }, [isIntersecting, countExperience, countWarranty, countWarranty1, countQuality]);

  // Effect to scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Helmet component for SEO meta tags */}
      <Helmet>
        <title>Ultimation Solution LLC - About Us</title>
        <link rel="canonical" href="https://www.ultimatesroofing.com/about" />
        <meta name='description' content='Learn more about Ultimates Roofing LLC - Your trusted partner for residential roofing, commercial roofing, siding, windows, and gutters. Discover our commitment to excellence and dedication to providing top-notch construction and home improvement services.' />
        <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
        best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
         <meta name='author' content='Ultimates Roofing LLC' />
        <meta name='robots' content='index, follow' />
        <html lang="en" />
      </Helmet>

      {/* About Main Section */}
      <div className='about-main'>
        <p className='about-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> About Us</p>
        <h2 className='about-page-heading'>Ultimates Roofing LLC</h2>
        <p className='about-page-text'>At Ultimates Roofing LLC, we believe that every home and business deserves the highest quality roofing solutions. Established [Year], we have proudly served [Location] and surrounding areas, earning a reputation for excellence in the Roofing and Siding industry.</p>
        <p className='about-page-text'>From comprehensive roof installation and replacement services to meticulous long-term repairs, Ultimates Roofing is your all-encompassing solution. With nearly a decade of dedicated expertise in the industry, our seasoned roofing contractor ensures that your project is not just a task but a commitment to excellence, providing you with the utmost peace of mind throughout the process.</p>

        <div className='image-container'>
          <img src={AboutMainImage} className='about-main-image' alt='Ultimates Roofing LLC building' />
        </div>
      </div>

      {/**  Cards Component */}
      <CardsComponent />

      <div className='about-main1'>
        <Row className='about-experience-text'>
          <Col>
            <img className='work-image' src={AboutPageImage} alt='Ultimates Roofing LLC work in progress' />
          </Col>
          <Col className='work-text'>
            <p className='about-page-text'>As the driving force behind Ultimates Roofing LLC, our company brings a wealth of passion and expertise to the roofing industry. With a background rooted in a genuine love for craftsmanship and a commitment to elevating properties, our journey began nearly a decade ago.</p>
            <p className='about-page-text'>Driven by a vision to redefine roofing solutions, our team has tirelessly led the company towards excellence. Ultimates Roofing is not just a business; it's a manifestation of our dedication to delivering top-tier services that go beyond industry standards.</p>
            <p className='about-page-text'>Under our leadership, Ultimates Roofing has become synonymous with quality, innovation, and customer satisfaction. Our commitment to integrity, community, and the highest standards of craftsmanship reflects our unwavering belief that every roofing project is an opportunity to make a lasting impact.</p>
            <Row className='work-details'>
              <Col>
                <div className='number-details' ref={countingRef}>{isIntersecting ? `${countExperience}+` : ''}</div>
                <div className='work-experience'>Years of Experience</div>
              </Col>
              <Col>
                <div className='number-details' ref={countingRef}>{isIntersecting ? countWarranty : ''} - {isIntersecting ? countWarranty1 : ''}</div>
                <div className='work-experience'>Years of Warranty</div>
              </Col>
              <Col>
                <div className='number-details' >{isIntersecting ? countQuality : ''}%</div>
                <div className='work-experience'>Quality Products</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Quick Answers Section */}
      <div className='about-main'>
        <Row className='about-experience-text'>
          <Col>
            <h2 className='about-page-heading1'>Quick Answers to Questions you may have </h2>
            <p className='about-page-text'>Couldn’t find what you are looking for? <span style={{ color: "#B22335", cursor: "pointer" }} onClick={() => { navigate('/contact') }}>Contact Us</span></p>
          </Col>
          <Col className='work-text1'>
            <Accordion defaultActiveKey="0">
              {reviews.map((review, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{review.question}</Accordion.Header>
                  <Accordion.Body>
                    <p className="answer">{review.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>

      {/* Logos Component */}
      <LogosComponent />
    </div>
  )
}

export default AboutPage