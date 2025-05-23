import React from 'react';
import './WhoWeAre.css';
import whoWeAreImage from '../../../../assets/TeamPageImages/Who_we_are_ultimatesroofingllc.jpg'; // replace with actual image path

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section font">
      <div className="row m-0 align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-4">
          <h2 className="whoHead mb-3 font">Who we are</h2>
          <p className="who-description font">Guided by our visionary spirit, we propel towards a future where the transformative prowess of roofing excellence 
            not only enhances each property but becomes a catalyst for enduring satisfaction, imprinting a profound and lasting impact on the landscapes we touch.
    Our mission is to empower clients by delivering top-tier roofing solutions, marked by a commitment to durability, continuous innovation, and unwavering dedication 
    to customer-centric service, ensuring not just satisfaction, but lasting trust.
    Our values stand on the pillars of integrity, unparalleled craftsmanship,
     and an unwavering dedication to client satisfaction,
     forming the cornerstone of our
     roofing commitment and ensuring every project reflects our commitment to excellence.
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
