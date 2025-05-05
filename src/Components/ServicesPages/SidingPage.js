import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './SidingPage.css'
import SidingEnhancement from '../../assets/ServicesPagesImages/SidingEnhancement.png'
import Icon1 from '../../assets/ServicesPagesImages/SidingIcon1.png'
import Icon2 from '../../assets/ServicesPagesImages/SidingIcon2.png'
import Icon3 from '../../assets/ServicesPagesImages/SidingIcon3.png'
import Icon4 from '../../assets/ServicesPagesImages/SidingIcon4.png'
import Siding1 from '../../assets/ServicesPagesImages/Siding1.png'
import Siding2 from '../../assets/ServicesPagesImages/Siding2.png'
import Siding3 from '../../assets/ServicesPagesImages/Siding3.png'
import Siding4 from '../../assets/ServicesPagesImages/Siding4.png'
import SidingElevate from '../../assets/ServicesPagesImages/SidingElevate.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

const SidingCards = [
    { image: Siding1, heading: "Energy-Efficient Solutions", text: "A thorough inspection is conducted to ensure the installed siding meets our high standards of craftsmanship." },
    { image: Siding2, heading: "Material Selection", text: "Collaborate with our experts to choose from a variety of premium siding materials, including James Hardie products." },
    { image: Siding3, heading: "Professional Installation", text: "Our skilled team ensures precise installation, guaranteeing a seamless and durable finish that enhances your property's exterior." },
    { image: Siding4, heading: "Quality Inspection", text: "A thorough inspection is conducted to ensure the installed siding meets our high standards of craftsmanship." }
]

function SidingPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Siding</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/siding" />
                <meta name="description" content="Ultimates Roofing LLC offers top-quality siding solutions. Enhance the aesthetics and durability of your property with our expert siding installations and repairs." />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Siding Enhancements</h2>
                <p className='service-page-text'>Experience the transformative impact of Ultimates Roofing's Siding Enhancement services, meticulously crafted to elevate your property's aesthetics and enhance durability. Our specialized team excels in revitalizing your home or business exterior, offering tailored solutions that include the finest siding products like Vinyl, James Hardie, and LP Smartside. With a focus on precision and customer satisfaction, we bring years of expertise to every project, ensuring a visually appealing and long-lasting transformation.</p>
                <img src={SidingEnhancement} className='service-main-image' alt='Ultimates Roofing LLC Siding' />

                <div>
                    <h2 className='key-heading'>Key Features</h2>
                    <Row className='key-row'>
                        <Col sm={5} style={{ padding: "0px" }}>
                            <img src={Icon1} alt='Ultimates Roofing LLC' />
                            <h5 className='key-heading1'>Siding Installation & Replacements</h5>
                            <p className='service-page-text'>Schedule a free consultation to discuss your vision, preferences, and project goals.</p>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={5} style={{ padding: "0px" }}>
                            <img src={Icon2} alt='Ultimates Roofing LLC' />
                            <h5 className='key-heading1'>Repairs and Maintenance</h5>
                            <p className='service-page-text'>Collaborate with our experts to choose from a variety of premium siding materials, including James Hardie products.</p>
                        </Col>
                    </Row>
                    <Row className='key-row'>
                        <Col sm={5} style={{ padding: "0px" }}>
                            <img src={Icon3} alt='Ultimates Roofing LLC' />
                            <h5 className='key-heading1'>Color and Style Consultation</h5>
                            <p className='service-page-text'>Our skilled team ensures precise installation, guaranteeing a seamless and durable finish that enhances your property's exterior.</p>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={5} style={{ padding: "0px" }}>
                            <img src={Icon4} alt='Ultimates Roofing LLC' />
                            <h5 className='key-heading1'>Energy-Efficient Solutions</h5>
                            <p className='service-page-text'>A thorough inspection is conducted to ensure the installed siding meets our high standards of craftsmanship.</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='service-main1'>
                <h2 className='key-heading'>Partnering with James Hardie</h2>
                <p className='service-page-text'>In our commitment to delivering the highest quality, we proudly partner with James Hardie, a leading manufacturer of fiber cement siding. James Hardie's innovative and durable siding products, combined with Ultimates Roofing's expertise, ensure a seamless integration of style, protection, and longevity.</p>
                <Row className='siding-row'>
                    {SidingCards.map((siding, index) => (
                        <Col key={index}>
                            <Card className='siding-card'>
                                <Card.Img src={siding.image} style={{ borderRadius: "0px" }} variant="top" alt={siding.heading} />
                                <Card.Body className='siding-body'>
                                    <h2 className='key-heading1'>{siding.heading}</h2>
                                    <p className='service-page-text'>{siding.text}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className='service-main1'>
                <Row className='siding-experience-text'>
                    <Col>
                        <img className='work-image' src={SidingElevate} alt='Ultimates Roofing LLC Siding' />
                    </Col>
                    <Col className='elevate-col'>
                        <h2 className='service-page-heading'>Elevate Your Property's Appeal and Longevity with Ultimates Roofing's Siding Enhancements</h2>
                        <p className='siding-page-text'>Enhance the charm and structural resilience of your property's exterior with the artistry of Ultimates Roofing's Siding Enhancements services, incorporating top-tier materials from the distinguished provider, James Hardie. Our dedicated team, fueled by a commitment to perfection, invites you to embark on a personalized journey of transformation. Immerse yourself in a free consultation, where our experts delve into your unique vision, offering tailored insights to redefine not just the aesthetics but also the enduring durability of your space. With a curated selection of premium siding materials, this collaboration with James Hardie ensures not only a visual makeover but also a testament to timeless elegance. Schedule your consultation today and witness the fusion of expertise and quality that will breathe new life into your property's exterior.</p>
                    </Col>
                </Row>
            </div>

            <LogosComponent />
        </div>
    )
}

export default SidingPage