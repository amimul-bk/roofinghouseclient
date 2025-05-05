import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ProjectsPage.css'

import video5 from '../../assets/HomePageImages/video4.mp4'
import Roofing1 from '../../assets/ProjectPageImages/Roofing1.png'
import Roofing2 from '../../assets/ProjectPageImages/Roofing2.png'
import Roofing3 from '../../assets/ProjectPageImages/Roofing3.png'
import Commercial1 from '../../assets/ProjectPageImages/Commercial1.png'
import Commercial2 from '../../assets/ProjectPageImages/Commercial2.png'
import Commercial3 from '../../assets/ProjectPageImages/Commercial3.png'
import Siding1 from '../../assets/ProjectPageImages/Siding1.png'
import Siding2 from '../../assets/ProjectPageImages/Siding2.png'
import Siding3 from '../../assets/ProjectPageImages/Siding3.png'
import Gutters1 from '../../assets/ProjectPageImages/Gutters1.png'
import Gutters2 from '../../assets/ProjectPageImages/Gutters2.png'
import Gutters3 from '../../assets/ProjectPageImages/Gutters2.png'
import Windows1 from '../../assets/ProjectPageImages/Windows1.png'
import Windows2 from '../../assets/ProjectPageImages/Windows2.png'
import Windows3 from '../../assets/ProjectPageImages/Windows3.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import PlayButton from '../../assets/HomePageImages/PlayButton.png'
import { FaTimes } from "react-icons/fa";
import { Helmet } from 'react-helmet'

const ResidentialRoofingImages = [Roofing1, Roofing2, Roofing3]
const CommercialRoofingImages = [Commercial1, Commercial2, Commercial3]
const SidingEnhancementImages = [Siding1, Siding2, Siding3]
const GuttersImages = [Gutters1, Gutters2, Gutters3]
const WindowsImages = [Windows1, Windows2, Windows3]

function ProjectsPage() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (

    <div>
      <Helmet>
        <title>Ultimates Roofing LLC - Projects</title>
        <link rel="canonical" href="https://www.ultimatesroofing.com/projects" />
        <meta name='description' content='Explore the impressive projects completed by Ultimates Roofing LLC. From residential roofing to commercial renovations, discover our commitment to excellence and quality craftsmanship.' />
        <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
        best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
        <meta name='author' content='Ultimates Roofing LLC' />
        <meta name='robots' content='index, follow' />
        <html lang="en" />
      </Helmet>

      <div className='projects-main'>
        <p className='projects-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Projects</p>
        <p className='projects-page-text'>Our portfolio reflects a decade of industry experience, featuring projects ranging from roof installation and replacement to repairs, siding enhancements, gutter installations, and window services. Each project is a testament to our craftsmanship and the enduring impact we aim to create on every rooftop.</p>
        <p className='projects-page-text'>Embark on a visual journey, witnessing the artistry and attention to detail that define our work. These projects showcase not only our skill but also the lasting impression we leave with each roofing endeavor.</p>
      </div>

      {/**    Row 1 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <video autoPlay muted playsInline loop>
              <source src={video5} type="video/mp4" />
            </video>
            <div className='play-icon1' onClick={() => openModal()}>
              <img className='play-icon-img1' src={PlayButton} alt='Ultimates Roofing LLC Play Icon' />
            </div>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Jan 25, 2023</p>
              <h2 className='project-heading'>Roof renovation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Renew and enhance your home with top-notch roof renovation in Columbus, Ohio. Elevate both aesthetics and durability with our expert services.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {ResidentialRoofingImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='Ultimates Roofing LLC Project' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - May 25, 2023</p>
              <h2 className='project-heading'>Commercial roofing installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Elevate your business infrastructure with expert commercial roofing installation in Columbus, Ohio. Ensure durability and functionality for your property with our professional services.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/**    Row 2 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {CommercialRoofingImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='Ultimates Roofing LLC Project' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Jan 17, 2023</p>
              <h2 className='project-heading'>Flat roofing installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Elevate your property with expert flat roofing installation in Columbus, Ohio. Rely on our skilled professionals for a durable and sleek roofing solution.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {SidingEnhancementImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='Ultimates Roofing LLC Project' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Jun 05, 2023</p>
              <h2 className='project-heading'>Siding installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Transform your home's exterior with flawless siding installation in Columbus, Ohio. Elevate curb appeal and durability with our expert craftsmanship.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/**    Row 3 */}
      <Row className='projects-main1'>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {WindowsImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='Ultimates Roofing LLC Project' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Apr 02, 2023</p>
              <h2 className='project-heading'>Windows Installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Experience a seamless transformation with precision windows installation in Columbus, Ohio. Elevate your home's energy efficiency and aesthetics with our expert services.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='project-col'>
          <Card className='project-card'>
            <Slider {...settings} >
              {GuttersImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt='Ultimates Roofing LLC Project' />
              ))}
            </Slider>
            <Card.Body>
              <p className='project-para'>Columbus, Ohio - Mar 21, 2023</p>
              <h2 className='project-heading'>Gutters Installation in Columbus, Ohio</h2>
              <p className='projects-page-text'>Upgrade your home's drainage system with precision gutters installation in Columbus, Ohio. Enhance functionality and curb appeal with our professional services.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <LogosComponent />

      {showModal && (
        <div className="video-modal">
          <div className="video-modal-content">
            <video autoPlay controls className="videos-modal-slide">
              <source src={video5} type="video/mp4" />
            </video>
            <div className="close-icon" onClick={closeModal}>
              <FaTimes />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage