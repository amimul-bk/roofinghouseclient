import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './WindowsPage.css'
import Windows from '../../assets/ServicesPagesImages/Windows.png'
import Windows1 from '../../assets/ServicesPagesImages/Windows1.png'
import Windows2 from '../../assets/ServicesPagesImages/Windows2.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function WindowsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Windows</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/windows" />
                <meta name="description" content="Upgrade your property with Ultimates Roofing LLC's expert window services. From installations to replacements, we provide high-quality window solutions tailored to your needs." />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Window Services</h2>
                <p className='service-page-text'>Discover a new perspective on aesthetics, functionality, and energy efficiency with Ultimates Roofing's Window Services. Our dedicated team combines expertise with innovation to offer comprehensive solutions tailored to enhance the beauty and performance of your property's windows.</p>
                <img src={Windows} className='windows-main-image' alt='Ultimates Roofing LLC Window' />
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Windows Services for a Brighter Home</h2>
                        <p className='service-page-text'>At Ultimations, we believe windows are more than just openings; they are a connection to the outdoors, allowing natural light and fresh air to fill your living spaces. Our comprehensive window services are designed to enhance the aesthetics, energy efficiency, and functionality of your home.</p>
                        <ul>
                            <li className='service-page-text'>Window Installation & Replacement</li>
                            <li className='service-page-text'>Customized Styles and Designs</li>
                            <li className='service-page-text'>Noise Reduction Technology</li>
                            <li className='service-page-text'>Low Maintenance and Easy Operation</li>
                            <li className='service-page-text'>Energy-Efficient Windows</li>
                        </ul>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Windows1} className='roofs-shining-image' alt='Ultimates Roofing LLC Window' />
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <img src={Windows2} className='roofs-shining-image' alt='Ultimates Roofing LLC Window' />
                    </Col>
                    <Col>
                        <h2 className='service-page-heading'>Experience Excellence with Ultimates Roofing LLC</h2>
                        <h5 className='window-mid-heading'>Your Home, Your Style</h5>
                        <p className='service-page-text'>Discover the perfect windows to complement your home's unique style and personality. Our diverse range of options ensures you find the ideal fit for your space.</p>
                        <h5 className='window-mid-heading'>Professional Consultation</h5>
                        <p className='service-page-text'>Our knowledgeable team provides expert advice to guide you through the selection process. Your satisfaction is our priority, and we are dedicated to exceeding your expectations.</p>
                    </Col>
                </Row>
            </div>

            <LogosComponent />
        </div>
    )
}

export default WindowsPage