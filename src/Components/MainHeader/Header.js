import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../assets/Icon/Logollc.png";
import ContactModal from "./ContactModal";

const menus = {
  Commercial: {
    cols: 1,
    items: [
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Free Roof Inspections & Estimates", href: "/contact" },
      { label: "Roof Replacement", href: "/contact" },
      { label: "Roof Installation", href: "/contact" },
      { label: "Roof Repair & Maintenance", href: "/contact" },
      { label: "Emergency Roofing Services", href: "/contact" },
      { label: "Roof Tarping", href: "/contact" },
      { label: "TPO Roof", href: "/contact" },
      { label: "Metal Roof", href: "/contact" },
      { label: "Shingles Roof", href: "/contact" },
      { label: "Tile Roof", href: "/contact" },
    ],
    cta: { label: "Commercial Services", href: "/commercial-roofing" },
  },
  Residential: {
    cols: 1,
    items: [
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Free Roof Inspections & Estimates", href: "/contact" },
      { label: "Roof Replacement", href: "/contact" },
      { label: "Roof Installation", href: "/contact" },
      { label: "Roof Repair & Maintenance", href: "/contact" },
      { label: "Emergency Roofing Services", href: "/contact" },
      { label: "Roof Tarping", href: "/contact" },
      { label: "Metal Roof", href: "/contact" },
      { label: "Shingles Roof", href: "/contact" },
      { label: "Tile Roof", href: "/contact" },
    ],
    cta: { label: "Residential Services", href: "/residential-roofing" },
  },
  Others: {
    cols: 1,
    items: [
      { label: "Siding Enhancements", href: "/siding-enhancements" },
      { label: "Gutter Systems", href: "/gutter-systems" },
      { label: "Window Services", href: "/window-services" },
      { label: "Power wash", href: "/our-team" },
      { label: "Painting", href: "/our-team" },
      { label: "Flooring", href: "/our-team" },
      { label: "Interior and Exterior Renovation", href: "/our-team" },
    ],
    cta: { label: "Others", href: "/siding-enhancements" },
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
    cta: { label: "Service Area", href: "/service-area/columbus" },
  },
  Company: {
    cols: 1,
    items: [
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/our-team" },
      { label: "Projects", href: "/projects" },
      { label: "Reviews", href: "/reviews" },
      { label: "Career With Us", href: "/success-page" }, // You may want to create this route later
    ],
    cta: { label: "Company", href: "/about" },
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
    <Navbar expand="xl" sticky="top" className="irs-navbar py-3">
      <Container fluid className="custom-container">
        <Navbar.Brand href="/home">
          <img src={logo} alt="IRS Logo" className="logoImg" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="irs-nav" />
        <Navbar.Collapse id="irs-nav" className="scrollMobileNav ">
          <Nav className="mx-auto irs-nav ">
            {Object.entries(menus).map(([menuLabel, { items, cols, cta }]) => {
              const columns = chunk(items, cols);
              return (
                <NavDropdown
                  key={menuLabel}
                  title={menuLabel}
                  id={`${menuLabel.toLowerCase().replace(/\s+/g, "-")}-dd`}
                  menuClassName={`mega-menu cols-${isMobile ? 12 : cols}`}
                >
                  {!isMobile && <div className="dropdown-arrow" />}

                  <div className="mega-content">
                    {columns.map((col, i) => (
                      <div className="mega-col" key={i}>
                        {col.map((item) => (
                          <NavDropdown.Item
                            href={item.href}
                            key={item.label}
                            className="mega-item"
                            // as={Link} to={item.href}
                          >
                            <IoIosArrowForward className="mega-dropdown-item-icon" />
                            <span className="item-text">{item.label}</span>
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
            })}

            <div className="center-btn">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </div>
          </Nav>

          <div className="center-btn">
            <ContactModal />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}