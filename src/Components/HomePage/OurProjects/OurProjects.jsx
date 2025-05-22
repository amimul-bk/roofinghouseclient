import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurProjects.css";

// Image imports
import com1 from "../../../assets/ServicesPagesImages/Siding3.png";
import com2 from "../../../assets/ServicesPagesImages/Siding2.png";
import com3 from "../../../assets/ServicesPagesImages/Siding1.png";

import res1 from "../../../assets/Ouproject/Best_Roofing_services_near_me_Ohio_ultimatesroofing.png";
import res2 from "../../../assets/Ouproject/Residential_roofing_services_Ohio_ultimates roofing.jpg";
import res3 from "../../../assets/Ouproject/Residential_roofing_services_Columbus_Ohio.jpg";

const filters = [
  { label: "All", value: "*" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

const projects = [
  {
    title: "Residential 1",
    category: "residential",
    image: res1,
    description: "Modern residential building with elegant design",
    size: "large",
  },
  {
    title: "Residential 2",
    category: "residential",
    image: res2,
    description: "Cozy and stylish residential house",
    size: "small",
  },
  {
    title: "Residential 3",
    category: "residential",
    image: res3,
    description: "Cozy and stylish residential house",
    size: "small",
  },
  {
    title: "Commercial 1",
    category: "commercial",
    image: com1,
    description: "Commercial project with high durability",
    size: "small",
  },
  {
    title: "Commercial 2",
    category: "commercial",
    image: com2,
    description: "Modern office building with glass facade",
    size: "small",
  },
  {
    title: "Commercial 3",
    category: "commercial",
    image: com3,
    description: "Large scale commercial complex",
    size: "small",
  },
  
];

const OurProjects = () => {
  const [filterKey, setFilterKey] = useState("*");
  const [isFading, setIsFading] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects =
    filterKey === "*" ? projects : projects.filter((p) => p.category === filterKey);

  // Fade effect on filter change
  const handleFilterChange = (value) => {
    if (value === filterKey) return; // same filter, ignore
    setIsFading(true);
    setTimeout(() => {
      setFilterKey(value);
      setIsFading(false);
    }, 300);
  };

  // Open modal to view big image
  const openModal = (project) => {
    setModalProject(project);
  };

  // Close modal
  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section id="projects" className="section projects-section">
      
        <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center mb-5 headerProject">
          <div className="">
          
            <h3 className="section-title">
              Explore Our Latest Projects 
            </h3>
          </div>
          <ul className="project-filters isotope-filters my-3 justify-content-xl-end justify-content-center">
            {filters.map((filter, index) => (
              <li
                key={index}
                className={filterKey === filter.value ? "filter-active" : ""}
                onClick={() => handleFilterChange(filter.value)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleFilterChange(filter.value)
                }
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={`projects-grid ${isFading ? "fade-out" : "fade-in"}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-item ${
                project.size === "large" ? "project-large" : "project-small"
              }`}
            >
              <div className="project-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                  onClick={() => openModal(project)}
                  style={{ cursor: "pointer" }}
                />
                <div className="overlay">
                  <h4 className="overlay-title">{project.title}</h4>
                  <p className="overlay-description">{project.description}</p>
                  <div className="project-links">
                    <button
                      className="preview-link-btn"
                      onClick={() => openModal(project)}
                      title={project.title}
                      aria-label={`View larger image of ${project.title}`}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </button>
                    <a href="/projects" className="details-link" title="More Details">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                <h5 className="small-title">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
     

      {/* Modal for big image */}
      {modalProject && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close image view">
              &times;
            </button>
            <img src={modalProject.image} alt={modalProject.title} />
            <h4>{modalProject.title}</h4>
            <p>{modalProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;
