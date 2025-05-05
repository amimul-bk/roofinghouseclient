import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './GuttersPage.css'
import Gutters from '../../assets/ServicesPagesImages/Gutters.png'
import Gutters1 from '../../assets/ServicesPagesImages/Gutters1.jpg'
import Gutters2 from '../../assets/ServicesPagesImages/Gutters2.jpg'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function GuttersPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Gutters</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/gutters" />
                <meta name="description" content="Ultimates Roofing LLC provides top-notch gutter solutions. Ensure proper drainage and protection for your property with our expert gutter installations and repairs." />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Gutter Systems</h2>
                <p className='service-page-text'>Discover unparalleled gutter solutions with Ultimates Roofing's Gutter System services, designed to safeguard your property against the elements and enhance its longevity. Our skilled team, driven by a commitment to quality, ensures precision installations and maintenance, making us your trusted partner in fortifying your property.</p>
                <img src={Gutters} className='gutters-main-image' alt='Ultimates Roofing LLC Gutters' />
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>The Ultimates Roofing Advantage</h2>
                        <p className='service-page-text'>Our commitment goes beyond the mere installation of gutter systems. We recognize that these systems are not just functional necessities; they are integral components of your property's overall aesthetic and structural integrity. At Ultimates Roofing, we approach every gutter project with the understanding that each system is a vital investment in the protection and longevity of your property. Our dedication extends to ensuring that your gutter system seamlessly integrates with the architectural nuances of your home or business, becoming a harmonious addition that complements the overall visual appeal.</p>
                        <p className='service-page-text'>Discover unparalleled peace of mind as Ultimates Roofing orchestrates a transformative fusion of precision, innovation, and durability in your gutter system. Beyond mere installation, we craft resilient solutions that enhance your property's aesthetics. Schedule your free consultation and entrust your property's protection to Ultimates Roofing, where form and function unite seamlessly.</p>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Gutters1} className='gutters-image' alt='Ultimates Roofing LLC Gutters' />
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <img src={Gutters2} className='gutters-image' alt='Ultimates Roofing LLC Gutters' />
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col className='gutters-text'>
                        <h2 className='service-page-heading'>Empowering Your Gutter System with LEAF RELIEF:</h2>
                        <p className='service-page-text'>In our relentless pursuit of excellence, Ultimates Roofing proudly partners with LEAF RELIEF, an industry leader in cutting-edge gutter protection systems. This strategic alliance amplifies the capabilities of your gutter system, ensuring not just efficient water drainage but also fortifying it against the invasion of leaves, debris, and potential clogs.</p>
                        <p className='service-page-text'>LEAF RELIEF's innovative gutter protection technology complements Ultimates Roofing's commitment to delivering superior solutions. This partnership guarantees that your gutter system remains free from unwanted debris, allowing it to function optimally even in the most challenging weather conditions. With LEAF RELIEF, your gutter system becomes a robust line of defense, providing enhanced durability and longevity for your property.</p>
                    </Col>
                </Row>
            </div>

            <div className='gutter-service'>
                <div className='service-main1'>
                    <Row className='roofing-sections'>
                        <Col className='gutters-text2'>
                            <h2 className='service-page-heading'>Winter-Ready Gutter Solutions</h2>
                            <p className='service-page-text'>Ultimates Roofing understands the winter challenges affecting gutter systems, particularly issues like ice dams and icicles. Our specialized solutions are designed to fortify gutters against winter-related problems, ensuring optimal performance in freezing conditions. With innovative heating systems strategically placed to prevent ice formation and customized winter maintenance plans, Ultimates Roofing provides year-round protection for your property. Schedule a consultation to explore tailored solutions and shield your gutters from winter challenges.</p>
                        </Col>
                        <Col className='temp-col' xs={1}></Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>

            <LogosComponent />
        </div>
    )
}

export default GuttersPage