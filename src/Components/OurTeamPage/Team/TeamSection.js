import "./Team.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import manager from "../../../assets/TeamPageImages/Akash_Hossain_Founder.jpg"
import ceo from "../../../assets/TeamPageImages/Corey_Crawford_Project_Manager.png"
import jakaria from "../../../assets/TeamPageImages/Jakaria_Hossain_Founder_&_project_manager.png"
import willam from "../../../assets/TeamPageImages/Willam_Galo.png"
import leny from "../../../assets/TeamPageImages/Leny_Hernandez_Crew_Leader.png"
import jahid from "../../../assets/TeamPageImages/MD_Jahid_Hasan_SEO_Expert_in_Roofing_Company_ohio.jpg"
import other from "../../../assets/TeamPageImages/Team.jpg"




const teamMembers = [
  {
    name: "Akash Hossan",
    position: "Founder & Project Manager",
    email: "ultimatesroofing247@gmail.com",
    phone: "+1 (614) 602-7980",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: manager,
  },
  {
    name: "Jakaria Hossan",
    position: "Co-Founder & Project Manager",
    email: "ultimatesroofing98@gmail.com",
    phone: "+16147874476",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: jakaria,
  },
  
  {
    name: "Corey Crawford",
    position: "Project Manager",
    email: "roofs@ultimatesroofing.com",
    phone: "+16148161883",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: ceo,
  },

  {
    name: "Willam Galo",
    position: "Project Manager ",
    email: "roofs@ultimatesroofing.com",
    phone: "+1 (614) 357-7539",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: willam,
  },
  {
    name: "Leny Hernandez ",
    position: "Crew Leader",
    email: "roofs@ultimatesroofing.com",
    phone: "+1 (614) 357-7539",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: leny,
  },
  {
    name: "Jahid Hasan",
    position: "Accountant & Marketing Specialist",
    email: "info@mdjahidhasan.com",
    phone: "+8801821207679",
    linkedin: "https://linkedin.com/in/mdjahidhasanchowdorykawshar/",
    intagram: "https://instagram.com/jahidseoexpert/",
    facebook: "https://facebook.com/mdjahidhasan.seo/",
    image: jahid,
  },
  {
    name: "Ketie Elizabeth",
    position: "office Administrator",
    email: "roofs@ultimatesroofing.com",
    phone: "+1 (614) 357-7539",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: other,
  },
  {
    name: " Nicole ",
    position: "Claims Expert ",
    email: "roofs@ultimatesroofing.com",
    phone: "+1 (614) 357-7539",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: other,
  },
  {
    name: "Adam ",
    position: "Handyman",
    email: "roofs@ultimatesroofing.com",
    phone: "+1 (614) 357-7539",
    linkedin: "https://www.linkedin.com/company/ultimatesroofing/",
    intagram: "https://www.instagram.com/ultimatesroofing/",
    facebook: "https://www.facebook.com/UltimateSRoofing/",
    image: other,
  },
  
];


const TeamSection = () => {
  return (
    <div className="bg-white team-section font">

      <div className="mb-md-5 mb-4">
        <h2 className="text-center text-black font teamhead">Our Team</h2>
        <p className="mx-auto text-center subtitle">
          Our roofing team protects communities with pride, purpose, and precision—delivering durable, high-quality craftsmanship you can trust.
        </p>
      </div>

      <div className="row gx-3 gy-3"> {/* gx-1 for 0.5rem horizontal gap */}
        {teamMembers.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
            <div className="card team-card text-center w-100 font">
              <img
                src={member.image}
                alt={member.name}
                className="img-fluid team-member-image mx-auto"
              />
              <h5 className="fw-bold mt-3 mb-1 text-black font">{member.name}</h5>
              <p className="mb-1 text-muted font">{member.position}</p>
              <div className="team-info mb-2">
              
                <p className="mb-1 small font">
                  <FaEnvelope className="me-2 red-bg" />
                  <a href={`mailto:${member.email}`} className="text-decoration-none text-black">{member.email}</a>
                </p>
                <p className="mb-1 small font">
                  <FaPhoneAlt className="me-2 red-bg" />
                  <a href={`tel:${member.phone.replace(/[^+\d]/g, '')}`} className="text-decoration-none text-black">{member.phone}</a>
                </p>

              </div>

              <div className="d-flex justify-content-center gap-2 mt-2">
                <a href={member.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>

                <a href={member.facebook} className="social-icon" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href={member.intagram} className="social-icon" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

