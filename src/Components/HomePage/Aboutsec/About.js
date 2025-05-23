import React from 'react';
import AboutHouse from "../../../assets/HomePageImages/AboutHouse.png";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
 
      <div className="about-section">
        <Row style={{ margin: "0px" }} className="row-about">
          <Col className="about-col">
            <div className="about-div">
              <h2 className="about-heading">
                Welcome to Ultimates Roofing, Where Excellence Meets Innovation
              </h2>
              <p className="about-text">
               Ultimates Roofing LLC presents a comprehensive array of Roofing services solutions​, encompassing new roof installations,
                meticulous roof maintenance, expert roof repairs, and advanced re-roofing solutions for Residential and Commercial ventures. 
                Our expertise extends to homes, offices, warehouses, and multi-family dwellings. 
               Over the 12+ years, clients have recognised and valued the talented and professional roofing service synonymous with us.
              </p>
              <Button
                onClick={() => {
                  navigate("/about");
                }}
                className="about-btn"
              >
                More About Us
              </Button>
            </div>
          </Col>
          <Col className='d-flex justify-content-lg-end'>
            <img
              className="about-img"
              src={AboutHouse}
              alt="Ultimates Roofing LLC About"
            />
          </Col>
        </Row>
      </div>
  );
};

export default About;
