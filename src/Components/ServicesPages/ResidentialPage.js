import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './ResidentialPage.css'
import Roofs from '../../assets/ServicesPagesImages/Roofs.png'
import ResidentialRoofing from '../../assets/ServicesPagesImages/ResidentialRoofing.png'
import RoofsShining from '../../assets/ServicesPagesImages/RoofsShining.png'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent'
import Arrow from '../../assets/ServicesPagesImages/Arrow 2.png'
import PDFFile from '../../assets/ServicesPDFs/Owens Corning Oakridge.pdf'
import PDFFile1 from '../../assets/ServicesPDFs/file1.pdf'
import { Helmet } from 'react-helmet'
import Services1 from '../../assets/ServicesPagesImages/RoofsShining1.png'

const ResidentialData = [
    { title: 'Innovative Design', description: 'Utilizing a robust, woven engineered reinforcing fabric for consistent fastening during installation' },
    { title: 'Strong Adhesion', description: 'Specially formulated with wide adhesive bands to maintain lamination between shingle layers.' },
    { title: 'Enhanced Grip:', description: 'The Tru-Bond® sealant tightly adheres to the engineered fabric nailing strip, providing outstanding grip.' },
    { title: 'SureNail® Technology', description: 'Owens Corning\'s Duration® Series Shingles boast patented SureNail® Technology for built-in strength and durability. SureNail, a visible fabric strip in the nailing area.' },
    { title: 'Triple-Layer Reinforcement®:', description: 'The fabric overlay creates a unique triple layer, reinforcing the common bond of shingle laminate layers for superior fastener holding power.' },
    { title: 'High Wind Resistance:', description: 'Engineered for exceptional 130-MPH* wind warranty performance with just 4 nails, reducing deck penetrations.' }
]

function ResidentialPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openLinkInNewTab = () => {
        window.open('https://www.owenscorning.com/en-us/roofing/duration-series-shingles', '_blank');
    };

    return (
        <div>
            <Helmet>
                <title>Ultimates Roofing LLC - Residential Roofing</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/residential-roofing" />
                <meta name="description" content="Discover Ultimates Roofing LLC's expert residential roofing services. From roof installations to repairs, we provide high-quality solutions with a focus on durability and aesthetics." />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name="author" content="Ultimates Roofing LLC" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>

            {/**    Residential Roofing Heading and banner */}
            <div className='service-main'>
                <p className='service-us'><span style={{ color: "#B22335", fontWeight: "bold" }}>I</span> Services</p>
                <h2 className='service-page-heading'>Residential Roofing</h2>
                <p className='service-page-text'>Welcome to Ultimates Roofing LLC, your trusted partner for elevating the protection and beauty of your home through expert roofing solutions. Our Residentail Roofing services are tailored to meet the unique needs of residential properties, ensuring durability, aesthetics, and peace of mind.</p>
                <img src={ResidentialRoofing} className='service-main-image' alt='Ultimates Roofing LLC Roofing' />
                <div className='service-section'>
                    <h2 className='service-page-heading'>Unmatched Roofing Innovation in Columbus , Ohio!</h2>
                    <p className='service-page-text'>At our core, we are experts in executing meticulous roof repairs and replacements, committed to doing it the right way. We never compromise; our process involves a thorough strip-down to the deck, a meticulous assessment to ensure it is in optimal condition before the new shingles are expertly laid. Your protection is not just a priority for us; it's our unwavering commitment and the guiding principle behind every step of our dedicated service.</p>
                    <h5 className='service-mid-heading'>We take meticulous steps in our process:</h5>
                    <Row className='roofing-list'>
                        <Col>
                            <ul>
                                <li className='service-page-text'>New water-resistant felt</li>
                                <li className='service-page-text'>Rubberized Ice and Water Shield on eaves and valleys</li>
                                <li className='service-page-text'>Fresh flashing for leak prevention</li>
                                <li className='service-page-text'>Metal edges for enhanced roof integrity</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li className='service-page-text'>Upgraded vents and chimney flashing</li>
                                <li className='service-page-text'>Premium Atlas Pinnacle shingles</li>
                                <li className='service-page-text'>Our exceptional warranty: 15 years on workmanship, lifetime on materials</li>
                                <li className='service-page-text'>Efficient one-day completion from start to clean-up!</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            {/**    Premium Shingles */}
            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Your Style With Our Premium Shingles & Tiles</h2>
                        <p className='service-page-text'>Experience roofing excellence with our selection of premium shingles and tiles. Designed to marry durability and aesthetic appeal, our shingles and tiles redefine your roof, offering not just protection but a touch of architectural sophistication. Each shingle is a testament to our commitment to quality, ensuring your home not only stands strong against the elements but also stands out in style. Discover the perfect blend of functionality and elegance for your roofing needs with our meticulously crafted shingles and tiles.</p>
                        <ul>
                            <li className='service-page-text'>Environmentally Conscious</li>
                            <li className='service-page-text'>Crafted from a 100% recyclable blend of natural limestone and virgin resins</li>
                            <li className='service-page-text'>Genuine</li>
                            <li className='service-page-text'>Experience the true beauty of authentic slate with its natural textures and edges!</li>
                        </ul>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Roofs} className='roofs-shining-image' alt='Ultimates Roofing LLC Roofing' />
                    </Col>
                </Row>
            </div>

            {/**    Corning Products */}
            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Elevate Your Roof with GAF Shingles: Our Trusted Partner</h2>
                        <p className='service-page-text'>Experience the pinnacle of residential roofing excellence as Ultimates Roofing proudly joins forces with GAF, a renowned leader in roofing materials. Our partnership with GAF allows us to offer an exclusive range of high-quality shingle products, ensuring that your residential roofing project benefits from the utmost durability, innovation, and aesthetic appeal.
                        </p>
                        <p className='service-page-text'>Discover a comprehensive selection of shingle products that combine aesthetic appeal with unmatched performance. Our expert team, certified in GAF installation practices, ensures that your residential roofing project benefits from the superior quality that GAF is renowned for. Schedule a consultation today to explore the possibilities of elevating your roof with GAF shingles and experience residential roofing at its finest.
                        </p>
                        <Button className='learn-btn' onClick={() => { window.open(PDFFile1, '_blank'); }}>Learn More</Button>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={Services1} className='roofs-shining-image' alt='Ultimates Roofing LLC Roofing' />
                    </Col>
                </Row>
            </div>

            {/**    Corning Products */}
            <div className='service-main1'>
                <Row className='roofing-sections'>
                    <Col>
                        <h2 className='service-page-heading'>Your Roofing Experience with Owens Corning Products</h2>
                        <p className='service-page-text'>With a legacy of over 75 years, Owens Corning stands as a prominent leader in the building materials industry. Trust in the assurance that your new roof will not only enhance but also safeguard your home for years to come. Explore the enduring performance and captivating beauty of Oakridge® Shingles – truly 'The Right Choice®’. Beyond a spectrum of popular colors, these shingles come with:</p>
                        <p className='service-page-text'>Enhance your home with Owens Corning TruDefinition® Duration® Designer Colors Collection Shingles, bringing exclusive colors and vibrancy for unique style and value.</p>
                        <Button className='learn-btn' onClick={() => { window.open(PDFFile, '_blank'); }}>Learn More</Button>
                    </Col>
                    <Col className='temp-col' xs={1}></Col>
                    <Col>
                        <img src={RoofsShining} className='roofs-shining-image' alt='Ultimates Roofing LLC Roofing' />
                    </Col>
                </Row>
            </div>

            {/**    Owens Corning */}
            <div className='service-main1'>
                <div className='section4'>
                    <h2 className='service-page-heading'>Duration® Series Shingles by Owens Corning</h2>
                    <p className='service-page-text'>The Duration® Series Shingles stand out among architectural shingles, thanks to our patented SureNail® Technology, a groundbreaking innovation in shingle design that sets them apart from the competition.</p>
                    <Button className='learn-btn' onClick={openLinkInNewTab}>Learn More</Button>
                </div>
                <Row className='roofing-sections1'>
                    {ResidentialData.slice(0, 3).map((data, index) => (
                        <Col>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img src={Arrow} alt='Ultimates Roofing LLC Arrow Icon' className='arrow2' />
                                </div>
                                <div>
                                    <h4 className='section4-heading'>{data.title}</h4>
                                    <p className='service-page-text'>{data.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className='roofing-sections1'>
                    {ResidentialData.slice(3, 6).map((data, index) => (
                        <Col>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img src={Arrow} alt='Ultimates Roofing LLC Arrow Icon' className='arrow2' />
                                </div>
                                <div>
                                    <h4 className='section4-heading'>{data.title}</h4>
                                    <p className='service-page-text'>{data.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <LogosComponent />

        </div>
    )
}

export default ResidentialPage