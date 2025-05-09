import React from "react";
import "./Header.css";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/Icon/Logollc.png";
import { IoIosArrowForward } from "react-icons/io";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import InstantRoofQuote from "./InstantRoofQuote";
import ContactModal from "./ContactModal";

const menus = {
    Commercial: {
        cols: 1,
        items: [
            "Commercial Roofing",
            "“Free” Roof Inspections and Estimates",
            "Roof Replacement",
            "Roof Installation",
            "Roof Repair & Maintenance",
            "Emergency Roofing Services",
            "Roof Tar-ping",
            "TPO Roof",
            "Metal Roof",
            "Shingles Roof",
            "Tile roof",
        ],
        cta: "Commercial Services",
    },
    Residential: {
        cols: 1,
        items: [
            "Residential Roofing",
            "“Free” Roof Inspections & Estimates",
            "Roof Replacement",
            "Roof Installation",
            "Roof Repair & Maintenance",
            "Emergency Roofing Services",
            "Roof Tar-ping",
            "Metal Roof",
            "Shingles roof",
            "Tile roof ",
        ],
        cta: "Residential Services",
    },
    Others: {
        cols: 1,
        items: ["Siding Enhancements", "Gutter Systems", "Window Services"],
        cta: "Others",
    },
    "Service Area": {
        cols: 3,
        items: [
            "Columbus, Ohio",
            "Dublin, Ohio",
            "Hilliard, Ohio",
            "Powell, Ohio",
            "Marysville, Ohio",
            "Reynoldsburg, Ohio",
            "Blacklick, Ohio",
            "Gahanna, Ohio",
            "Delaware, Ohio",
        ],
        cta: "Service Area",
    },
    Company: {
        cols: 1,
        items: ["About", "Projects", "Reviews", "Career With Us"],
        cta: "Company",
    },
};

function chunk(items, cols) {
    const per = Math.ceil(items.length / cols);
    const chunks = [];
    for (let i = 0; i < cols; i++) {
        chunks.push(items.slice(i * per, i * per + per));
    }
    return chunks;
}

export default function Header() {
    const isMobile = window.innerWidth <= 768;
    return (
        <Navbar expand="lg" sticky="top" className="irs-navbar">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="IRS Logo" className="logoImg" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="irs-nav" />
                <Navbar.Collapse id="irs-nav" className="scrollMobileNav">
                    <Nav className="mx-auto irs-nav">
                        {Object.entries(menus).map(
                            ([label, { items, cols, cta }]) => {
                                const columns = chunk(items, cols);
                                return (
                                    <NavDropdown
                                        key={label}
                                        title={label}
                                        id={`${label
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}-dd`}
                                        menuClassName={`mega-menu cols-${cols}`}
                                    >
                                        {!isMobile && (
                                            <div className="dropdown-arrow" />
                                        )}

                                        <div className="mega-content">
                                            {columns.map((col, i) => (
                                                <div
                                                    className="mega-col"
                                                    key={i}
                                                >
                                                    {col.map((it) => (
                                                        <NavDropdown.Item
                                                            href="#"
                                                            key={it}
                                                            className="mega-item"
                                                        >
                                                            <IoIosArrowForward className="mega-dropdown-item-icon" />

                                                            <span className="item-text">
                                                                {it}
                                                            </span>
                                                        </NavDropdown.Item>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            buttonText={cta}
                                            buttonType="nav"
                                        />
                                    </NavDropdown>
                                );
                            }
                        )}

                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>

                    {/* <div className="d-flex align-items-center gap-3 call-portal cta-btn">
                        <FaPhoneVolume className="phone-icon" />
                        <a href="tel:+16143249797" className="phone-number">
                            (614) 324-9797
                        </a>
                    </div> */}

                    <ContactModal />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
