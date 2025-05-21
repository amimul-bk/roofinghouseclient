import React from 'react';
import './WhoWeAre.css';
import whoWeAreImage from '../../../../assets/ServicesPagesImages/SidingEnhancement.png'; // replace with actual image path

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section font">
      <div className="row m-0 align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-4">
          <h2 className="whoHead mb-3 font">Who we are</h2>
          <p className="who-description font">
          As the driving force behind Ultimates Roofing LLC, our company brings a wealth of passion and expertise to the roofing industry. With a background 
          rooted in a genuine love for craftsmanship and a commitment to elevating properties, our journey began nearly a decade ago.

Driven by a vision to redefine roofing solutions, our team has tirelessly led the company towards excellence. Ultimates Roofing is not just a 
business; it's a manifestation of our dedication to delivering top-tier services that go beyond industry standards.

Under our leadership, Ultimates Roofing has become synonymous with quality, innovation, and customer satisfaction. Our commitment to integrity, community, and the
 highest standards of craftsmanship reflects our unwavering belief that every roofing project is an opportunity to make a lasting impact.
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
