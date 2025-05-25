import React, { useState } from "react";
import { Button, Toast,Modal } from "react-bootstrap";
import { IoMdPhonePortrait } from "react-icons/io";
import videoSource from "../../../assets/HomePageImages/Best_Roofing_Company_in_Across_OhioUltimatesRoofingLLC.mp4";
import './Video.css'
import { TbTargetArrow } from "react-icons/tb";
import { GiMicroscope } from "react-icons/gi";
import ContactModal from "../ContactModal";
import InstantRoofQuote from "../../MainHeader/InstantRoofQuote";

const Video = () => {
 
  const [toast, setToast] = useState(true);
  const [toast1, setToast1] = useState(true);
 
  const [showModel, setShowModal] = useState(false);
  const [showModel1, setShowModal1] = useState(false);

  const handleToastClose = () => {
    setToast(false);
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
      <div className="background-video-container">
        <video autoPlay muted playsInline loop className="background-video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="content-overlay font">
          <h1 className="main-heading font mx-auto ">
            Your Trusted Roofing Company  Across Ohio for Quality Service to Meet Your Needs
          </h1>

          <div className="d-flex justify-content-center text-white mx-auto">

            <p className="font ">  LICENSED | BONDED | INSURED</p>
          </div>
          <div className="btn-div d-flex mx-auto align-items-center justify-content-center font">
            <Button className="phonebtn">
              <div className="d-flex gap-1 align-items-center justify-content-center mx-auto">
                <IoMdPhonePortrait />
                <a
                  href="tel:+16143577539"
                  className="text-decoration-none d-flex align-items-center justify-content-center text-white text-center font"
                >
                  +1 614-357-7539
                </a>
              </div>
            </Button>

            <div className="">
              <ContactModal />
            </div>


            {toast && toast1 && (
              <Toast
                style={{
                  borderRadius: "0px",
                  position: "fixed",
                  right: "0",
                  zIndex: "1100",
                  
                }}
                onClose={handleToastClose}
                >
                <Toast.Header style={{ fontSize: "14px" ,  }}>
                  <strong className="me-auto">Need consultant's advice?</strong>
                </Toast.Header>
                <Toast.Body
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor:"#b22335",
                   
                  }}
                >
                  <div style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
                    Request for a call back
                  </div>
                  <div style={{ cursor: "pointer" }} onClick={() => setShowModal1(true)}>
                    Leave a message for us
                  </div>
                </Toast.Body>
              </Toast>
            )}
          </div>
        </div>


      </div>
      {/* Floating Services Boxes */}
      <div className="floating-services-boxes font">
        <div className="service-box font">
          <h3 className="font ser-head"><GiMicroscope className="me-1" />Vision</h3>
          <p className="justify">
            Guided by our visionary spirit, we propel towards a future where the transformative prowess of roofing excellence not only enhances each property
            but becomes a catalyst for enduring satisfaction, imprinting a profound and lasting impact on the landscapes we touch.
          </p>

        </div>

        <div className="service-box">
          <h3 className="font ser-head"> <TbTargetArrow className="me-1" />Mission </h3>
          <p className="justify">
            Our mission is to empower clients by delivering top-tier roofing solutions, marked by a commitment to durability,
            continuous innovation,
            and unwavering dedication to customer-centric service, ensuring not just satisfaction, but lasting trust.
          </p>

        </div>
      </div>
       {/** Modal Component for request a call back */}
            <Modal show={showModel} onHide={handleCloseModal} className="popupTwo d-flex justify-content-center">
              <Modal.Header closeButton>
                <Modal.Title>Request for a call back</Modal.Title>
              </Modal.Header>
              <InstantRoofQuote source="request" handleClose={handleCloseModal} />
            </Modal>
      
            {/** Modal Component1 for messagee */}
            <Modal show={showModel1} onHide={handleCloseModal1} className="popupTwo d-flex justify-content-center">
              <Modal.Header closeButton>
                <Modal.Title>Leave a message to us</Modal.Title>
              </Modal.Header>
              <InstantRoofQuote source="message" handleClose={handleCloseModal1} />
            </Modal>
    </div>

  );
};

export default Video;






