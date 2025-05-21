import React from 'react';
import './MeetUs.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MeetUs = () => {
  return (
    <div className="meet-us-section d-flex align-items-center">
      <div className="overlay"></div>
      <Container className="text-white position-relative">
        <h1 className="fw-bold mb-3">Team</h1>
        <div className="breadcrumb-custom">
          <Link to="/" className="text-white text-decoration-none">Home</Link>
          <span className="mx-2 text-white">&gt;</span>
          <Link to="/about" className="text-white text-decoration-none">About</Link>
          <span className="mx-2 text-white">&gt;</span>
       <Link to="/our-team" className="text-white text-decoration-none">Team</Link>
        </div>
      </Container>
    </div>
  );
};

export default MeetUs;
