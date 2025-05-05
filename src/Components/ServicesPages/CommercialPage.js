import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import './CommercialPage.css'
import CommercialRoofing from '../../assets/ServicesPagesImages/CommercialRoofng.png'
import Commercial1 from '../../assets/ServicesPagesImages/Commercial1.jpg'
import Commercial2 from '../../assets/ServicesPagesImages/Commercial2.jpg'
import Commercial3 from '../../assets/ServicesPagesImages/Commercial3.png'
import Commercial4 from '../../assets/ServicesPagesImages/Commercial4.png'
import Commercial5 from '../../assets/ServicesPagesImages/Commercial5.png'
import Commercial6 from '../../assets/ServicesPagesImages/Commercial6.png'
import Commercial7 from '../../assets/ServicesPagesImages/Commercial7.png'
import Commercial8 from '../../assets/ServicesPagesImages/Commercial8.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import { Helmet } from 'react-helmet'

function CommercialPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Commercial Roofing</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/commercial-roofing" />
                <meta name="description" content="Explore Ultimates Roofing LLC's commercial roofing services. Our expert team specializes in providing durable and efficient roofing solutions for businesses and commercial properties." />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Commercial Roofing</h2>
                <p className='service-page-text'>Discover the pinnacle of commercial roofing excellence at Ultimates Roofing. Our Commercial Roofing services are tailored to meet the unique needs of your business. From precision installations to long-term maintenance, we deliver top-tier solutions that go beyond industry standards.</p>
                <img src={CommercialRoofing} className='service-main-image' alt='Ultimates Roofing LLC Commercial Roofing' />
                <div className='service-section'>
                    <h2 className='commercial-page-heading'>Flat and Metal Roof Options</h2>
                    <p className='service-page-text'>Ultimates Roofing takes pride in presenting our customers with roofing products that have been honored with the prestigious ENERGY STAR label. Today, our Benchmark®, Rapid Roof III®, and PUMA® roof coatings continue to lead the industry in technology, performance, and environmental responsibility, setting the standard for excellence.</p>
                    <h2 className='commercial-page-heading1' style={{ marginTop: "2rem" }}>1. Conklin Membrane Coating System</h2>
                    <p className='service-page-text'>As TPO and various membranes weather over time, roofs may develop cracks, leaks, gather dirt, and experience diminished effectiveness. Enter the Conklin Membrane Coating system, offering an economical and effective solution to restore and safeguard approved membranes, ensuring renewed durability and sustained performance.</p>
                    <p className='service-page-text'>In 1977, Conklin pioneered the first acrylic roof coating, and today, our commitment to innovation reaches new heights with a comprehensive waterproofing system for approved membranes. As TPO and other membranes weather, roofs can deteriorate, developing cracks, leaks, and accumulating dirt, diminishing their efficiency and energy-saving capabilities. Enter Conklin's elastomeric coatings, a novel and cost-effective solution designed to repair and preserve approved membranes, ultimately enhancing energy savings and ensuring the longevity of roofing systems.</p>
                    <h5 className='service-mid-heading'>Advantages</h5>
                    <ul>
                        <li className='service-page-text'>Boosts energy efficiency with a cool white reflective surface.</li>
                        <li className='service-page-text'>Superior waterproofing halts leaks.</li>
                        <li className='service-page-text'>Prolongs the lifespan of your current roof.</li>
                        <li className='service-page-text'>Extended 18-Year Non-Prorated Warranty for added peace of mind.</li>
                        <li className='service-page-text'>Cost-effective solution, significantly less than roof replacement.</li>
                    </ul>
                </div>
                <Row className='steps-row'>
                    <h5 className='service-mid-heading'>Process</h5>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial1} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 1</h5>
                            <h5 className='process-heading-step1'>Inspection and Preparation:</h5>
                            <p className='service-page-text'>Our technicians meticulously assess the existing roofing system, identifying vulnerabilities and preparing the surface for coating application.</p>
                        </div>
                    </Col>
                    <Col sm={1} className='empty-col'></Col>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial2} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 2</h5>
                            <h5 className='process-heading-step1'>Primer Application:</h5>
                            <p className='service-page-text'>A specialized primer is expertly applied to create a robust bond, enhancing adhesion and ensuring the longevity of the Conklin Membrane Coating System.</p>
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: "5rem" }} className='steps-row'>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial3} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 3</h5>
                            <h5 className='process-heading-step1'>Membrane Coating Application:</h5>
                            <p className='service-page-text'>The renowned Conklin Membrane Coating, known for superior waterproofing, is applied by our skilled team, creating a resilient protective layer for enhanced durability.</p>
                        </div>
                    </Col>
                    <Col sm={1} className='empty-col'></Col>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial4} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 4</h5>
                            <h5 className='process-heading-step1'>Quality Inspection and Finalization:</h5>
                            <p className='service-page-text'>A rigorous quality inspection confirms the coating's effectiveness, fortifying the roofing system against leaks and environmental stressors for lasting protection. Your investment is now revitalized for peak performance.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='service-main1'>
                <div className='service-section'>
                    <h2 className='commercial-page-heading1'>2. Conklin Metal Roof Restoration System</h2>
                    <p className='service-page-text'>Introducing a comprehensive waterproofing system tailored for metal roofs, designed to prevent rust, eliminate leaks, and offer an energy-efficient, durable, and aesthetically pleasing finish that stands the test of time. Our approach reinforces all seams with fabric embedded into our acrylic elastomeric roof coating, ensuring enhanced strength. Exposed fasteners are meticulously sealed with premium caulking, providing robust protection against the elements. The entire roof surface benefits from Conklin's industry-leading roof coatings, presenting an effective solution to preserve existing metal roofs without the expense of costly repairs or replacements.</p>
                </div>
                <Row style={{ marginTop: "5rem" }} className='steps-row'>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial5} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 1</h5>
                            <h5 className='process-heading-step1'>Surface Preparation:</h5>
                            <p className='service-page-text'>Our skilled technicians conduct a comprehensive inspection of the metal roof, identifying areas of concern such as rust, leaks, and wear. The surface is then meticulously prepared, including cleaning and addressing any necessary repairs to create a stable foundation.</p>
                        </div>
                    </Col>
                    <Col sm={1} className='empty-col'></Col>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial6} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 2</h5>
                            <h5 className='process-heading-step1'>Seam Reinforcement and Fastener Sealing:</h5>
                            <p className='service-page-text'>All seams on the metal roof are reinforced using fabric embedded into Conklin's acrylic elastomeric roof coating. This step ensures added strength and durability. Exposed fasteners are sealed with premium caulking, providing a protective barrier against the elements.</p>
                        </div>
                    </Col>
                </Row>

                <Row style={{ marginTop: "5rem" }} className='steps-row'>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial7} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 3</h5>
                            <h5 className='process-heading-step1'>Application of Industry-Leading Roof Coatings:</h5>
                            <p className='service-page-text'>The entire metal roof surface is coated with one of Conklin's industry-leading roof coatings. This coating serves as a robust shield, offering superior waterproofing, rust inhibition, and a long-lasting finish that contributes to energy efficiency.</p>
                        </div>
                    </Col>
                    <Col sm={1} className='empty-col'></Col>
                    <Col sm={5} className='steps-col'>
                        <img src={Commercial8} className='process-step-img' alt='Ultimates Roofing LLC Commercial Roofing' />
                        <div className='text-div'>
                            <h5 className='process-heading-step'>Step 4</h5>
                            <h5 className='process-heading-step1'>Final Inspection and Preservation:</h5>
                            <p className='service-page-text'>A thorough final inspection is conducted to assess the effectiveness of the restoration. This step ensures that the Conklin Metal Roof Restoration System has successfully preserved the existing metal roof, eliminating the need for costly repairs or replacements. The revitalized roof is now equipped to provide years of service with enhanced durability and aesthetic appeal.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <LogosComponent />
        </div>
    )
}

export default CommercialPage