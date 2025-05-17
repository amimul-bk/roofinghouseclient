import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './CommitmentComponent.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//  Commitments Data
const commitment = [
    { heading: "Efficient Installations", text: "Ultimates Roofing guarantees a streamlined, hassle-free process, effectively minimizing disruption to your family life during and following meticulous cleanup and  dumpster removal." },
    { heading: "Top-Tier Quality", text: "Elevate your property's appeal with premium materials; our shingles offer unrivaled warranties, while our siding and windows stand out in the industry for lasting excellence." },
    { heading: "Impeccable Cleanup", text: "Post-installation, thorough cleanup, with magnetic nail retrieval, ensures your property is pristine. Swift dumpster removal minimizes inconvenience." }
]

function CommitmentComponent() {
    // Slider settings
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
    return (
        <div>
            {/**    Web View */}
            <div className='commitment-section text-center' >
                <h2 className='commitment-heading'>Our Commitment<br />to Valued Clients</h2>
                <Row style={{ margin: "0rem" }} className="justify-content-center">
                    {commitment.map((commit, index) => (
                        <Col key={index}>
                            <Card className='commit-col'>
                                <div className='commit-circle'>
                                    <p className='commit-number'>0{index + 1}</p>
                                </div>
                                <h2 className='commit-headd'>{commit.heading}</h2>
                                <p className='commit-text'>{commit.text}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/**    Mobile view */}
            <div className='commitment-section1 text-center' >
                <h2 className='commitment-heading'>Our Commitment<br />to Valued Clients</h2>
                <Slider  {...settings} >
                    {commitment.map((commit, index) => (
                        <Col key={index}>
                            <Card className='commit-col d-flex  flex-column align-items-center '>
                                <div className='commit-circle'>
                                    <p className='commit-number'>0{index + 1}</p>
                                </div>
                                <div className='d-flex  flex-column align-items-center justify-content-center mx-auto'>
                                    <h2 className='commit-headd mx-auto text-center d-flex justify-content-center align-content-center'>{commit.heading}</h2>
                                    <p className=' mx-auto text-center d-flex justify-content-center align-content-center'>{commit.text}</p>
                                </div>

                            </Card>
                        </Col>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default CommitmentComponent