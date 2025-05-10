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
            { label: "Commercial Roofing", href: "/commercial/roofing" },
            {
                label: "Free Roof Inspections & Estimates",
                href: "/commercial/inspections",
            },
            { label: "Roof Replacement", href: "/commercial/replacement" },
            { label: "Roof Installation", href: "/commercial/installation" },
            { label: "Roof Repair & Maintenance", href: "/commercial/repair" },
            {
                label: "Emergency Roofing Services",
                href: "/commercial/emergency",
            },
            { label: "Roof Tarping", href: "/commercial/tarping" },
            { label: "TPO Roof", href: "/commercial/tpo" },
            { label: "Metal Roof", href: "/commercial/metal" },
            { label: "Shingles Roof", href: "/commercial/shingles" },
            { label: "Tile Roof", href: "/commercial/tile" },
        ],
        cta: { label: "Commercial Services", href: "/commercial" },
    },
    Residential: {
        cols: 1,
        items: [
            { label: "Residential Roofing", href: "/residential/roofing" },
            {
                label: "Free Roof Inspections & Estimates",
                href: "/residential/inspections",
            },
            { label: "Roof Replacement", href: "/residential/replacement" },
            { label: "Roof Installation", href: "/residential/installation" },
            { label: "Roof Repair & Maintenance", href: "/residential/repair" },
            {
                label: "Emergency Roofing Services",
                href: "/residential/emergency",
            },
            { label: "Roof Tarping", href: "/residential/tarping" },
            { label: "Metal Roof", href: "/residential/metal" },
            { label: "Shingles Roof", href: "/residential/shingles" },
            { label: "Tile Roof", href: "/residential/tile" },
        ],
        cta: { label: "Residential Services", href: "/residential" },
    },
    Others: {
        cols: 1,
        items: [
            { label: "Siding Enhancements", href: "/others/siding" },
            { label: "Gutter Systems", href: "/others/gutters" },
            { label: "Window Services", href: "/others/windows" },
        ],
        cta: { label: "Others", href: "/others" },
    },
    "Service Area": {
        cols: 3,
        items: [
            { label: "Columbus, Ohio", href: "/service-area/columbus" },
            { label: "Dublin, Ohio", href: "/service-area/dublin" },
            { label: "Hilliard, Ohio", href: "/service-area/hilliard" },
            { label: "Powell, Ohio", href: "/service-area/powell" },
            { label: "Marysville, Ohio", href: "/service-area/marysville" },
            { label: "Reynoldsburg, Ohio", href: "/service-area/reynoldsburg" },
            { label: "Blacklick, Ohio", href: "/service-area/blacklick" },
            { label: "Gahanna, Ohio", href: "/service-area/gahanna" },
            { label: "Delaware, Ohio", href: "/service-area/delaware" },
        ],
        cta: { label: "Service Area", href: "/service-area" },
    },
    Company: {
        cols: 1,
        items: [
            { label: "About", href: "/company/about" },
            { label: "Projects", href: "/company/projects" },
            { label: "Reviews", href: "/company/reviews" },
            { label: "Career With Us", href: "/company/careers" },
        ],
        cta: { label: "Company", href: "/company" },
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
  
    const isMobile = window.innerWidth <= 1024;
    return (
        <Navbar expand='xl' sticky="top" className="irs-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="IRS Logo" className="logoImg" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="irs-nav" />
                <Navbar.Collapse id="irs-nav" className="scrollMobileNav">
                    <Nav className="mx-auto irs-nav">
                        {Object.entries(menus).map(
                            ([menuLabel, { items, cols, cta }]) => {
                                const columns = chunk(items, cols);
                                return (
                                    <NavDropdown
                                        key={menuLabel}
                                        title={menuLabel}
                                        id={`${menuLabel
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}-dd`}
                                        menuClassName={`mega-menu cols-${isMobile ? 12 : cols}`}

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
                                                    {col.map((item) => (
                                                        <NavDropdown.Item
                                                            href={item.href}
                                                            key={item.label}
                                                            className="mega-item"
                                                            // as={Link} to={item.href}
                                                        >
                                                            <IoIosArrowForward className="mega-dropdown-item-icon" />
                                                            <span className="item-text">
                                                                {item.label}
                                                            </span>
                                                        </NavDropdown.Item>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            buttonText={cta.label}
                                            buttonType="nav"
                                            href={cta.href}
                                        />
                                    </NavDropdown>
                                );
                            }
                        )}

                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>

                    <ContactModal />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

