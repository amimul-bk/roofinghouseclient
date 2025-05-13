
import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { IoMdPhonePortrait } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import videoSource from "../../../assets/HomePageImages/Ultimate Roofing Video_Dec28.mp4";
import './Video.css'
import { MdRoofing } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { GrVmMaintenance } from "react-icons/gr";
import { MdEmergency } from "react-icons/md";

const Video = () => {
    const navigate = useNavigate();
  const [toast, setToast] = useState(true);
  const [toast1, setToast1] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  
  const handleToastClose = () => {
    setToast(false);
    setToast1(false);
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
        <h1 className="main-heading font">
          Your Trusted Roofing Company in Columbus, Ohio for Quality Service to Meet Your Needs
        </h1>
        <h2 className="subhead fw-bold font">
          # Residential + Commercial Roofing Contractors Columbus Ohio
        </h2>
        <p className="main-text font">
          Ultimates Roofing LLC specialises in top-quality residential and commercial roofing
          installation, inspections, repairs and 24/7 emergency services across Columbus, Ohio.
          Protecting local homes, offices, warehouses, businesses and multi-local families-owned
          dwellings with expert care and durable roofing solutions.
        </p>
<div className="d-flex justify-content-center text-white mx-auto">
  
    <p className="font fw-bolder ">  LICENSED | BONDED | INSURED</p>
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
          <Button className="estimate-btn font" onClick={() => navigate("/contact")}>
            Get Your Free Estimate
          </Button>

         

          {toast && toast1 && (
            <Toast
              style={{
                borderRadius: "0px",
                position: "fixed",
                right: "0",
                zIndex: "1000",
              }}
              onClose={handleToastClose}
            >
              <Toast.Header style={{ fontSize: "14px" }}>
                <strong className="me-auto">Need consultant's advice?</strong>
              </Toast.Header>
              <Toast.Body
                style={{
                  color: "#000",
                  fontSize: "13px",
                  display: "flex",
                  justifyContent: "space-between",
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
          <h3 className="font ser-head"><MdRoofing className="me-1"/>“Free” Roof Inspections and Estimates</h3>
          <p className="justify">
           Schedule a complimentary roof inspection and receive a detailed estimate from our experts.

          </p>
          <h3  className="font ser-head">  <BsFillHouseHeartFill  className="me-1"/>Roof Installation + Replacement</h3>
          <p className="justify">
            Professional installation and replacement services using high-quality materials for lasting durability.
          </p>
        </div>

        <div className="service-box">
          <h3  className="font ser-head"><GrVmMaintenance /> Roof Repair + Maintenance</h3>
          <p className="justify">
           Prompt repair and regular maintenance to extend the lifespan of your roof and prevent costly damages.
          </p>
          <h3  className="font ser-head"><MdEmergency /> 24/7 Emergency Roofing Services</h3>
          <p className="justify">
          24/7 emergency roofing services to address unexpected issues promptly and efficiently.
          </p>
        </div>
      </div>
        </div>
       
    );
};

export default Video;




  

