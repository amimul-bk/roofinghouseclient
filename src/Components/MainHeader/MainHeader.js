import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './MainHeader.css';

export function MainHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isServiceAreaOpen, setIsServiceAreaOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 960;
      setIsMobile(mobile);
      if (!mobile) {
        setOpenNav(false);
        setIsCommercialOpen(false);
        setIsServiceAreaOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-4 sticky-top" style={{ zIndex: 1050 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold" href="#">
            <img src={logo} alt="Logo" style={{ width: "120px" }} />
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setOpenNav(!openNav)}
            aria-controls="navbarNav"
            aria-expanded={openNav}
            aria-label="Toggle navigation"
          >
            {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${openNav ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link" href="#">Residential</a>
              </li>

              {/* ✅ Updated Commercial Dropdown */}
              <li
                className="nav-item dropdown position-relative"
                onMouseEnter={() => !isMobile && setIsCommercialOpen(true)}
                onMouseLeave={() => !isMobile && setIsCommercialOpen(false)}
              >
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                  href="#"
                  role="button"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      setIsCommercialOpen(prev => !prev);
                    }
                  }}
                >
                  Commercial <ChevronDownIcon className="h-4 w-4" />
                </a>

                <div
                  className={`dropdown-menu border-0 shadow-lg bg-white animate__animated ${isCommercialOpen ? "animate__fadeIn" : "animate__fadeOut"}`}
                  style={{
                    top: isMobile ? "auto" : "100%",
                    position: isMobile ? "static" : "absolute",
                    left: isMobile ? "auto" : "50%",
                    transform: isMobile ? "none" : "translateX(-50%)",
                    maxWidth: isMobile ? "100%" : "370px",
                    display: isCommercialOpen ? "block" : "none",
                    animationDuration: "300ms",
                    zIndex: 1000,
                    borderTop: "2px solid #b22335",
                    paddingBottom: 0,
                  }}
                >
                  {/* Triangle Pointer */}
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
                    <div className="row row-cols-1 justify-content-between flex-grow-1 px-3">
                      {commercial.map((city, index) => (
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
                      Commercial
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* ✅ Updated Service Area Dropdown */}
            
          {/* Service Area */}
          <li
            className="nav-item dropdown position-static"
            onMouseEnter={() => !isMobile && setIsServiceAreaOpen(true)}
            onMouseLeave={() => !isMobile && setIsServiceAreaOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle d-flex align-items-center gap-1"
              href="#"
              role="button"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setIsServiceAreaOpen(prev => !prev);
                }
              }}
            >
              Service Area <ChevronDownIcon className="h-4 w-4" />
            </a>
          
            <div
              className={`dropdown-menu border-0 shadow-lg bg-white animate__animated ${isServiceAreaOpen ? "animate__fadeIn" : "animate__fadeOut"}`}
              style={{
                top: isMobile ? "auto" : "70%",
                position: isMobile ? "static" : "absolute",
                left: 0,
                right: 0,
                margin: "auto",
                maxWidth: isMobile ? "100%" : "600px",
                display: isServiceAreaOpen ? "block" : "none",
                animationDuration: "300ms",
                zIndex: 1000,
               
                paddingBottom: 0,
              }}
            >
               {/* Triangle Pointer */}
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


              <li className="nav-item">
                <a className="nav-link" href="#">Service Area</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Others</a>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <a className="btn fw-semibold text-white rounded-pill px-4 py-2" href="#" style={{ backgroundColor: "#b22335" }}>
              GET A FREE ESTIMATE
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

const commercial = [
  "Commercial Roofing", "“Free” Roof Inspections and Estimates", "Roof Replacement", "Roof Installation",
  "Roof Repair & Maintenance", "Emergency Roofing Services", "Roof Tar-ping", "TPO Roof",
  "Metal Roof", "Shingles Roof", "Tile roof",
];

const servicearea = [
  "Columbus, Ohio", "Dublin, Ohio", "Hilliard, Ohio", "Powell, Ohio",
  "Marysville, Ohio", "Reynoldsburg, Ohio", "Blacklick, Ohio", "Gahanna, Ohio",
  "Delaware, Ohio",
];
