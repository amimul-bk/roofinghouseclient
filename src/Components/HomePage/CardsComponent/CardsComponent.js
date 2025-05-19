import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './CardsComponent.css';
import Vision from '../../../assets/HomePageImages/Vision.png';
import Mission from '../../../assets/HomePageImages/Mission.png';
import Value from '../../../assets/HomePageImages/Value.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Cards data
const cards = [
    { heading: "Vision", imageUrl: Vision, text: "Guided by our visionary spirit, we propel towards a future where the transformative prowess of roofing excellence not only enhances each property but becomes a catalyst for enduring satisfaction, imprinting a profound and lasting impact on the landscapes we touch." },
    { heading: "Mission", imageUrl: Mission, text: "Our mission is to empower clients by delivering top-tier roofing solutions, marked by a commitment to durability, continuous innovation, and unwavering dedication to customer-centric service, ensuring not just satisfaction, but lasting trust." },
    { heading: "Value", imageUrl: Value, text: "Our values stand on the pillars of integrity, unparalleled craftsmanship, and an unwavering dedication to client satisfaction, forming the cornerstone of our roofing commitment and ensuring every project reflects our commitment to excellence." }
]

function CardsComponent() {

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
        <div className='cards'>

            {/**    Web View */}
            <Row className='card-container'>
                {cards.map((card, index) => (
                    <Col key={index}>
                        <Card className='cards-section'>
                            <div className='cards-heading'>
                                <h2 className='cards-head'>{card.heading}</h2>
                                <img className={card.heading === "Vision" ? 'cards-img' : card.heading === "Mission" ? 'cards-img1' : 'cards-img2'} src={card.imageUrl} alt='Icon' />
                            </div>
                            <div className='cards-text'>{card.text}</div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/**    Mobile view */}
            <div className='carousel-container'>
                <Slider {...settings} >
                    {cards.map((card, index) => (
                        <Col key={index}>
                            <Card className='cards-section'>
                                <div className='cards-heading'>
                                    <h2 className='cards-head'>{card.heading}</h2>
                                    <img className={card.heading === "Vision" ? 'cards-img' : card.heading === "Mission" ? 'cards-img1' : 'cards-img2'} src={card.imageUrl} alt='Icon' />
                                </div>
                                <div style={{ padding: "1rem" }} className='card-text'>{card.text}</div>
                            </Card>
                        </Col>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default CardsComponent