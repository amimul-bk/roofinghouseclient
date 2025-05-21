import React from 'react';
import './WhoWeAre.css';
import whoWeAreImage from '../../../../assets/ServicesPagesImages/SidingEnhancement.png'; // replace with actual image path

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="row m-0 align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3">Who we are</h2>
          <p className="who-description">
            RexoIT is one of the leading software companies in Bangladesh. RexoIT was established in 2017 to steer customers through the next generation of business innovation powered by technology with state-of-the-art software development and IT services.
            We provide a wide variety of Software Development & Information Technology services, including ERP system development, CRM system development, SCADA system development, Cloud development, IoT software development, Mobile app development (iOS & Android), Web Development, Cyber Security, Server development & Management, Artificial Intelligence, Data analysis, Digital marketing, and many more.
            <br /><br />
            For companies operating in the digital information era, we help leverage new technologies to competitive advantage. We deliver high-value innovated solutions by bridging the gap between business and technology. RexoIT started its journey 6 years ago to improve digital technology, distribution, and product development for corporate businesses.
            <br /><br />
            Our team members are masters in these fields and have consistently delivered high-level results to satisfied customers over the past years. Innovation, advanced technology, information security, creativity, and sophisticated strategy — you have all in one place at RexoIT.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src={whoWeAreImage}
            alt="Think Different"
            className="img-fluid who-img"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
