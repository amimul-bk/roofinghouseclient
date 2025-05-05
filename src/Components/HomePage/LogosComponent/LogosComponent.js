import React from 'react'
import Logo1 from '../../../assets/HomePageImages/Logo1.png'
import Logo2 from '../../../assets/HomePageImages/Logo2.png'
import Logo3 from '../../../assets/HomePageImages/Logo3.png'
import Logo4 from '../../../assets/HomePageImages/Logo4.png'
import Logo5 from '../../../assets/HomePageImages/Logo5.png'
import Logo6 from '../../../assets/HomePageImages/Logo6.png'
import './LogosComponent.css'
import { Col, Row } from 'react-bootstrap'

// Logos Urls
const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

function LogosComponent() {
    return (
        <div className='logo-slider'>
            {/**    Web view         */}
            <div className='slide-track'>
                <Row>
                    {logos.slice(0, 3).map((logo, index) => (
                        <Col key={index} className='slide1'>
                            <img className='logo-width1' src={logo} alt='Ultimates Roofing LLC Logo' />
                        </Col>
                    ))}
                </Row>
                <Row>
                    {logos.slice(3, 6).map((logo, index) => (
                        <Col key={index} className='slide1'>
                            <img className='logo-width1' src={logo} alt='Ultimates Roofing LLC Logo' />
                        </Col>
                    ))}
                </Row>
            </div>

            {/**    Mobile view         */}
            <div className='slide-track1'>
                <Row>
                    {logos.map((logo, index) => (
                        <Col md={6} key={index} className='slide1'>
                            <img className='logo-width1' src={logo} alt='Ultimates Roofing LLC Logo' />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default LogosComponent