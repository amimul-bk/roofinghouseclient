import "./Team.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import  manager from "../../../assets/TeamPageImages/Akash.jpg"
import  ceo from "../../../assets/TeamPageImages/Corey.jpg"
import  other from "../../../assets/TeamPageImages/Team.jpg"



const teamMembers = [
  {
    name: "Akash Hossan",
    position: "Project Manager",
    email: "sara@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: manager,
  },
  {
    name: "Corey Crawford",
    position: "CEO",
    email: "gustavo@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: ceo,
  },
  
{
    name: "Liam Carter",
    position: "Lead Developer",
    email: "liam@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other,
  },
  {
    name: "Emily Watson",
    position: "Project Manager",
    email: "emily@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other,
  },
  {
    name: "Noah Blake",
    position: "UI/UX Designer",
    email: "noah@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other ,
  },
  {
    name: "Olivia Smith",
    position: "Business Analyst",
    email: "olivia@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other ,
  },
  {
    name: "Ethan James",
    position: "Software Engineer",
    email: "ethan@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other ,
  },
  {
    name: "Sophia Green",
    position: "HR Manager",
    email: "sophia@company.com",
    phone: "+1234567890",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    image: other ,
  }
];



const TeamSection = () => {
  return (
    <div className="bg-white team-section">
      <h2 className="text-center mb-5 teamhead text-black">Our Team</h2>
      <div className="row gx-3 gy-3"> {/* gx-1 for 0.5rem horizontal gap */}
        {teamMembers.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
            <div className="card team-card text-center w-100">
              <img
                src={member.image}
                alt={member.name}
                className="img-fluid team-member-image mx-auto"
              />
              <h5 className="fw-bold mt-3 mb-1 text-black font">{member.name}</h5>
              <p className="mb-1 text-muted font">{member.position}</p>
              <div className="team-info mb-2">
                <p className="mb-1 small"><FaEnvelope className="me-2 red-bg" />{member.email}</p>
                <p className="mb-1 small"><FaPhoneAlt className="me-2 red-bg" />{member.phone}</p>
              </div>
              <div className="d-flex justify-content-center gap-2 mt-2">
                <a href={member.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.twitter} className="social-icon" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href={member.facebook} className="social-icon" target="_blank" rel="noreferrer">
                  <FaFacebookF />
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

