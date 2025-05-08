import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/Icon/Logollc.png';
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';
import { FaPhoneVolume } from "react-icons/fa6";
import './MainHeader.css'

const MainHeader = () => {
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
 
  const [isServiceAreaOpen, setIsServiceAreaOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 960;
      setIsMobile(mobile);
      if (!mobile) {
        setOpenNav(false);
        setIsCommercialOpen(false);
        setIsResidentialOpen(false);
        setIsCompanyOpen(false);
        
        setIsServiceAreaOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const commercial = [
    "Commercial Roofing", "“Free” Roof Inspections and Estimates", "Roof Replacement", "Roof Installation",
    "Roof Repair & Maintenance", "Emergency Roofing Services", "Roof Tar-ping", "TPO Roof",
    "Metal Roof", "Shingles Roof", "Tile roof",
  ];

  const residential = [
    "Residential Roofing", "“Free” Roof Inspections & Estimates", "Roof Replacement", "Roof Installation",
    "Roof Repair & Maintenance", "Emergency Roofing Services", "Roof Tar-ping", "Metal Roof",
    "Shingles roof", "Tile roof ", "Siding Enhancements", "Gutter Systems", "Window Services"
  ];

  const servicearea = [
    "Columbus, Ohio", "Dublin, Ohio", "Hilliard, Ohio", "Powell, Ohio",
    "Marysville, Ohio", "Reynoldsburg, Ohio", "Blacklick, Ohio", "Gahanna, Ohio",
    "Delaware, Ohio",
  ];

  const company = ["About", "Projects", "Reviews", "Career With Us"];

 

  const renderDropdown = (label, isOpen, setIsOpen, menuItems) => (
    <li
      className="nav-item dropdown position-relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <a
        className="nav-link d-flex align-items-center gap-1"
        href="#"
        role="button"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            setIsOpen(prev => !prev);
          }
        }}
      >
        {label} <IoIosArrowDown />
      </a>

      <div
        className={`dropdown-menu border-0 shadow-lg bg-white animate__animated ${isOpen ? "animate__fadeIn" : "animate__fadeOut"}`}
        style={{
          top: isMobile ? "auto" : "100%",
          position: isMobile ? "static" : "absolute",
          left: isMobile ? "auto" : "50%",
          transform: isMobile ? "none" : "translateX(-50%)",
          maxWidth: isMobile ? "100%" : "370px",
          display: isOpen ? "block" : "none",
          animationDuration: "300ms",
          zIndex: 1000,
          borderTop: "2px solid #b22335",
          paddingBottom: 0,
        }}
      >
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "10px solid #ffffff",
              zIndex: 1010,
            }}
          />
        )}
        <div className="d-flex flex-column rounded-5">
          <div className="row row-cols-1 justify-content-between flex-grow-1 px-3">
            {menuItems.map((item, index) => (
              <div className="col" key={index}>
                <a
                  href="#"
                  className="dropdown-item py-1 px-2 mb-2 d-flex align-items-start gap-2 text-dark"
                  style={{ fontSize: "0.95rem" }}
                >
                  <span className="fw-bold" style={{ color: "#b22335" }}>›</span>
                  <span className="hover-text" style={{ transition: "color 0.2s" }}>{item}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="mt-0 m-0 rounded-5">
            <a className="btn fw-semibold text-white w-100 py-3" href="#" style={{ backgroundColor: "#b22335" }}>
              {label}
            </a>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <div className='sticky-top'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <a className="navbar-brand" href="#home">
              <img src={logo} alt="Logo" className='logoImg' />
            </a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='showNav'
          >
            <Nav className="mx-auto">
              <div className={`collapse navbar-collapse justify-content-center show  `} id="navbarNav">
                <ul className="navbar-nav text-center text-lg-start">
                  {renderDropdown("Residential", isResidentialOpen, setIsResidentialOpen, residential)}
                  {renderDropdown("Commercial", isCommercialOpen, setIsCommercialOpen, commercial)}

                  {/* Service Area */}

                  <li
                    className="nav-item dropdown position-static"
                    onMouseEnter={() => !isMobile && setIsServiceAreaOpen(true)}
                    onMouseLeave={() => !isMobile && setIsServiceAreaOpen(false)}
                  >
                    <a
                      className="nav-link  d-flex align-items-center gap-1"
                      href="#"
                      role="button"
                      onClick={(e) => {
                        if (isMobile) {
                          e.preventDefault();
                          setIsServiceAreaOpen(prev => !prev);
                        }
                      }}
                    >
                      Service Area <IoIosArrowDown />
                    </a>

                    <div
                      className={`dropdown-menu border-0 shadow-lg bg-white animate__animated ${isServiceAreaOpen ? "animate__fadeIn" : "animate__fadeOut"}`}
                      style={{
                        top: isMobile ? "auto" : "80%",
                        position: isMobile ? "static" : "absolute",
                        left: isMobile ? "auto" : "35%",
                        transform: isMobile ? "none" : "translateX(-50%)",


                        right: 0,
                        margin: "auto",
                        maxWidth: isMobile ? "100%" : "600px",
                        display: isServiceAreaOpen ? "block" : "none",
                        animationDuration: "300ms",
                        zIndex: 1000,
                        paddingBottom: 0,
                      }}
                    >
                      {!isMobile && (
                        <div
                          style={{
                            content: "''",
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 0,
                            height: 0,
                            borderLeft: "10px solid transparent",
                            borderRight: "10px solid transparent",
                            borderBottom: "10px solid #ffffff",
                            zIndex: 1010,
                          }}
                        />
                      )}
                      <div className="d-flex flex-column rounded-5">
                        <div className="row row-cols-1 row-cols-md-3 justify-content-between flex-grow-1 px-3">
                          {servicearea.map((city, index) => (
                            <div className="col" key={index}>
                              <a
                                href="#"
                                className="dropdown-item py-1 px-2 mb-2 d-flex align-items-start gap-2 text-dark"
                                style={{ fontSize: "0.95rem" }}
                              >
                                <span className="fw-bold" style={{ color: "#b22335" }}>›</span>
                                <span className="hover-text" style={{ transition: "color 0.2s" }}>{city}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                        <div className="mt-0 m-0 rounded-5">
                          <a className="btn fw-semibold text-white w-100 py-3" href="#" style={{ backgroundColor: "#b22335" }}>
                            Service Area
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>


                  {renderDropdown("Company", isCompanyOpen, setIsCompanyOpen, company)}
                  <li
                    className="nav-item  position-static"
                    
                  >
                    <a
                      className="nav-link  d-flex align-items-center gap-1"
                      href="#"
                      role="button"
                      onClick={(e) => {
                        if (isMobile) {
                          e.preventDefault();
            ;
                        }
                      }}
                    >
                      Contact 
                    </a>

                  </li>
                </ul>
              </div>
            </Nav>

            <div className="d-flex align-items-center gap-3 mx-auto justify-content-center">
              <div className='d-flex align-items-center gap-1'>
                <FaPhoneVolume style={{ color: "#b22335" }} /> 
                <a href="tel:+16143577539" className="text-decoration-none  d-flex align-items-center text-black"> 614-357-7539
                </a>
              </div>
              <Button />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default MainHeader;
