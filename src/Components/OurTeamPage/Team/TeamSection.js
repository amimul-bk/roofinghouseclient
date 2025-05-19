import "./Team.css";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
  {
    name: "Gustavo Workman",
    position: "CEO",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg"
  },
  {
    name: "Gustavo Workman",
    position: "CEO",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg"
  },
  {
    name: "Gustavo Workman",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?fm=jpg&q=60&w=3000"
  },
  {
    name: "Gustavo Workman",
    position: "CEO",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg"
  },
  {
    name: "Gustavo Workman",
    position: "CEO",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET4.jpg"
  }
];

const TeamSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 

  return (
    <div className="bg-white">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4 teamhead text-black">Dream team</h2>
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1150: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}
            className="team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center onhover bg-color">
                <div className="card border-0 text-center bg-color">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid team-member-image mx-auto"
                  />
                  <h5 className="fw-bold mt-3 mb-1 text-black font">{member.name}</h5>
                  <p className="mb-0 text-black font">{member.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="btn d-flex justify-content-end mt-3 swiper-nav-wrapper">
            <div className="swiper-button-prevs me-3" ref={prevRef}>
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
                className="arrow-left"
                alt="Prev"
              />
            </div>
            <div className="swiper-button-nexts" ref={nextRef}>
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Path.svg"
                className="arrow-right"
                alt="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
