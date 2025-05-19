import React, { useEffect, useState } from "react";

import { Col, Row, Toast, Modal } from "react-bootstrap";
import videoSource from "../../assets/HomePageImages/Best_Roofing_Company_in_Across_OhioUltimatesRoofingLLC.mp4";

import "./HomePage.css";
import PlayStore from "../../assets/HomePageImages/PlayStore.png";
import AppStore from "../../assets/HomePageImages/AppStore.png";
import Mobile from "../../assets/HomePageImages/Mobile.png";
import ServiceCardsComponent from "./ServiceCardsComponent/ServiceCardsComponent";
import CardsComponent from "./CardsComponent/CardsComponent";
import CommitmentComponent from "./CommitmentComponent/CommitmentComponent";
import ValueCardsComponent from "./ValueCardsComponent/ValueCardsComponent";
import VideosComponent from "./VideosComponent/VideosComponent";
import LogosComponent from "./LogosComponent/LogosComponent";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import InstantRoofQuote from "../MainHeader/InstantRoofQuote";
import { IoMdPhonePortrait } from "react-icons/io";
import Video from "./Vedio/Video";
import About from "./Aboutsec/About";



function HomePage() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [toast1, setToast1] = useState(true);
  const [showModel, setShowModal] = useState(false);
  const [showModel1, setShowModal1] = useState(false);
  const [toast2, setToast2] = useState(false);

  const handleAppStoreClick = () => {
    setToast2(true); // Display the second toast message
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(true);
    }, 10000);

    return () => clearInterval(interval);
  }, [toast]);

  const handleToastClose = () => {
    setToast1(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <Helmet>
        <title>Ultimates Roofing LLC - Home</title>
        <link rel="canonical" href="https://www.ultimatesroofing.com/home" />
        <meta
          name="description"
          content="Welcome to Ultimates Roofing LLC - Your trusted partner for residential roofing, commercial roofing, siding, windows, and gutters. Providing top-notch services with a commitment to excellence."
        />
        <meta
          name="keywords"
          content="Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio,
        best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet"
        />
        <meta name="author" content="Ultimates Roofing LLC" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

    <Video></Video>
      {/**  our services */}
      <ServiceCardsComponent />

      {/*   About us  */}
<About></About>

      {/**  Mission, Value and Vision Cards */}
      

      {/**    values */}
      <ValueCardsComponent />

      {/**  Commitment */}
      <CommitmentComponent />

      {/**    videos */}
      <VideosComponent />

      {/**    logo slider */}
      <LogosComponent />

      {/**  download app */}
      <Row className="app-section mx-auto justify-content-center align-items-center">
        
        <Col>
          <h1 className="app-heading">Download Our Mobile App</h1>
          <p className="app-text">
            Experience convenience at your fingertips! Download the Ultimates
            Roofing mobile app now to stay connected, track your project, and
            access exclusive offers. Your home upgrade journey just got even
            easier.
          </p>
          <h5 className="store-heading">Available on:</h5>
          <div className="apps-store mx-auto ">
            <div className="app-icons">
              <img
                style={{ marginLeft: "1vh", width: "60px", borderRadius: '15px' }}
                src={PlayStore}
                alt="Ultimates Roofing LLC PlayStore Icon"
              />
              <p className="store-text">PlayStore</p>
            </div>
            <div className="app-icons">
              <img
                style={{ marginLeft: "1vh" }}
                src={AppStore}
                alt="Ultimates Roofing LLC Appstore Icon"
                onClick={handleAppStoreClick}
              />
              <p className="store-text">AppStore</p>
            </div>
            {toast2 && (
              <Toast className="appstore-toast" onClose={() => setToast2(false)} >
                <Toast.Header style={{ fontSize: "14px" }}>
                  <strong className="me-auto">Coming Soon...</strong>
                </Toast.Header>
                <Toast.Body style={{ color: "#000", fontSize: "13px" }}>
                  Build is in progress
                </Toast.Body>
              </Toast>
            )}

            <img
              className="mobile-img-view"
              src={Mobile}
              alt="Ultimates Roofing LLC Mobile"
            />
          </div>
        </Col>
        <Col className="mobile-view-none" xs={2}></Col>
        <Col className="mobile-view-none" xs={2}>
          <img
            className="mobile-img"
            src={Mobile}
            alt="Ultimates Roofing LLC Mobile"
          />
        </Col>
      </Row>
      {/** Modal Component for request a call back */}
      <Modal show={showModel} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request for a call back</Modal.Title>
        </Modal.Header>
        <InstantRoofQuote source="request" handleClose={handleCloseModal} />
      </Modal>

      {/** Modal Component1 for messagee */}
      <Modal show={showModel1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a message to us</Modal.Title>
        </Modal.Header>
        <InstantRoofQuote source="message" handleClose={handleCloseModal1} />
      </Modal>
    </div>
  );
}

export default HomePage;