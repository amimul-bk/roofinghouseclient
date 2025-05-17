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
                Ultimates Roofing LLC presents a comprehensive array of
                services, encompassing new roof installations, meticulous roof
                maintenance, expert roof repairs, and cutting-edge re-roofing
                solutions for Residential and Commercial ventures. Our expertise
                extends to homes, offices, warehouses, and multi-family
                dwellings. Over the years, clients have recognized and valued
                the adept and professional service synonymous with us.
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
          <Col>
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
