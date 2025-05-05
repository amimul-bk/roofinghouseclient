import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../../assets/Icon/Logollc.png";
import usa from "../../assets/Icon/usa.svg";
import { BsCaretRightFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import address from "../../assets/Icon/usaHeadoffice.png";
import emailphone from "../../assets/Icon/PhoneEmail.png";
import { LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { TiMediaFastForward } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <section className="py-5 pb-2 ">
        <div className="container mx-auto">

          {/* Top Section */}
          <Row className="pb-3 text-white  justify-content-center mx-auto gap-lg-0 ">
           

            {/* Bangladesh Address */}
            <Col xs={12} md={6} lg={5} className="mb-lg-1 mb-3 d-flex gap-3 align-items-center justify-content-md-center justify-content-start  mx-auto">
              <div>
              <FaLocationDot />
              </div>
              <div className="d-flex flex-column gap-1  text-md-left">
                <p className="my-0 fw-bold ">Head Office</p>
                <p className="my-0 custom-hover ">2756 Sawbury Blvd
                Columbus, Ohio 43235, USA</p>
                
              </div>
            </Col>

           
             {/* Contact Info */}
             <Col xs={12} md={6} lg={4} className="mb-lg-1 mb-3 d-flex gap-3 align-items-center justify-content-md-center justify-content-start  mx-auto">
              
              <div className="d-flex flex-column ">
                <p className="my-0 fw-bold">Contact Info</p>
                <div className="d-flex gap-1 align-items-center custom-hover"> 
                <MdEmail />
                <a href="tel:+16143577539" className="text-decoration-none  d-flex align-items-center">+1 (614) 357-7539
                </a> </div>

                <div className="d-flex gap-1 align-items-center custom-hover">
                <IoMdPhonePortrait />
                  <a href="mailto:roofs@ultimatesroofing.com" className="text-decoration-none  d-flex align-items-center">
                roofs@ultimatesroofing.com</a></div>
                
                
              </div>
            </Col>
             {/* Canada Address */}
             <Col xs={12} md={12} lg={3} className="mb-lg-1 mb-3 d-flex align-items-center justify-content-md-center justify-content-start mx-auto ">
              
              <div className="d-flex flex-column   text-md-left">
                <p className="my-0 fw-bold ">Timings</p>
                <p className="my-0 custom-hover"> <TiMediaFastForward /> Mon - Fri</p>
                <p className="my-0 custom-hover d-flex align-items-center gap-1"> <LuTimer />09:00 AM - 05:00 PM</p>
              </div>
            </Col>
          </Row>
          
          {/* Bottom Section */}
          <Row className="grid  secondColor  pt-4 pb-2  container mx-auto ">
            {/* Company Info */}
            <Col  className=" mb-lg-1 mb-4 colOne">
              <div className="w-50 mb-1">
                <img src={logo} alt="Company Logo" className="img-fluid" />
              </div>
              <p className="  firstfootertext">
                Welcome to Ultimates Roofing LLC, your creative marketing partner. We turn vision into measurable success with innovative strategies and data-driven solutions.
              </p>
              

              <ul className="list-unstyled d-flex gap-2 mt-4">
                <li><a href="#" className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle social-icon" style={{ width: "38px", height: "38px" }}><FaFacebook /></a></li>
                <li><a href="#" className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle social-icon" style={{ width: "38px", height: "38px" }}><BsTwitterX /></a></li>
                <li><a href="#" className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle social-icon" style={{ width: "38px", height: "38px" }}><AiFillLinkedin /></a></li>
                <li><a href="#" className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle social-icon" style={{ width: "38px", height: "38px" }}><FaInstagramSquare /></a></li>
              </ul>
            </Col>


            {/* Residential Roofing */}
            <Col  className=" mb-lg-1 mb-4">
              <h4 className="text-uppercase small mb-3">RESIDENTIAL ROOFING</h4>
              <div className="custom-underline d-flex align-items-center gap-2 mt-1">
                <div className="dot bg-danger rounded-circle"></div>
                <div className="line bg-white"></div>
              </div>
              <ul className="list-unstyled mt-3">
                {["“Free” Roof Inspections & Estimates", "Roof Replacement", "Roof Installation", "Roof Repair & Maintenance", "Emergency Roofing Services"].map((item, i) => (
                  <li key={i} className="mb-2 d-flex gap-1">
                    <BsCaretRightFill style={{ color: "#ff3b3b" }} />
                    <a href="#" className="text-white text-decoration-none small link-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

             {/* Commercial Roofing */}
             <Col  className=" mb-lg-1 mb-4">
              <h4 className="text-uppercase small mb-3">COMMERCIAL ROOFING</h4>
              <div className="custom-underline d-flex align-items-center gap-2 mt-1">
                <div className="dot bg-danger rounded-circle"></div>
                <div className="line bg-white"></div>
              </div>
              <ul className="list-unstyled mt-3">
                {["“Free” Roof Inspections and Estimates", "Roof Replacement", "Roof Installation", "Roof Repair & Maintenance","Emergency Roofing Services"].map((item, i) => (
                  <li key={i} className="mb-2 d-flex gap-1">
                    <BsCaretRightFill style={{ color: "#ff3b3b" }} />
                    <a href="#" className="text-white text-decoration-none small link-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Quick Links */}
            <Col  className=" mb-lg-1 mb-4">
              <h4 className="text-uppercase small mb-3">QUICKLINKS</h4>
              <div className="custom-underline d-flex align-items-center gap-2 mt-1">
                <div className="dot bg-danger rounded-circle"></div>
                <div className="line bg-white"></div>
              </div>
              <ul className="list-unstyled mt-3">
                {["Contact Innovative",  "Client Portal Login", "Service Area", "Partners & Listings", "Privacy Policy"].map((item, i) => (
                  <li key={i} className="mb-2 d-flex gap-1">
                    <BsCaretRightFill style={{ color: "#ff3b3b" }} />
                    <a href="#" className="text-white text-decoration-none small link-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </Col>

           

            
          </Row>

         
          <div className="text-center small my-0 py-0 ">
            <p className="my-1">© 2023   <a href="https://www.ultimatesroofing.com/" className="text-white text-decoration-none small link-hover">Ultimates Roofing LLC.</a> </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Footer;
