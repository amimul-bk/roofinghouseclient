import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Form,
  Row,
  Spinner,
  Toast,
  Button,
  Accordion,
} from "react-bootstrap";
import Quote from "../../assets/HomePageImages/Quote.png";
import "./ReviewsPage.css";
import LogosComponent from "../HomePage/LogosComponent/LogosComponent";
import ReviewsPageImage from "../../assets/ReviewsPageImage.png";
import axios from "axios";
import { Helmet } from "react-helmet";

function ReviewsPage() {
  const url =
    "https://ultimatesroofing.com/api/ultimates/reviews";
  const timestamp = new Date().getTime();
 
  const apiUrlWithTimestamp = `${url}?timestamp=${timestamp}`;

  // const [reviewData, setReviewData] = useState([]);
  const [reviewNone, setReviewNone] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successToast, setSuccessToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  const [reviewsData, setReviewsData] = useState({
    name: "",
    location: "",
    message: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getReviews()
       // eslint-disable-next-line
  }, []);


  const getReviews = () =>{
    setLoading(true);
    axios
      .get(apiUrlWithTimestamp, {
        headers: {
          "Cache-Control": "no-store",
        },
      })
      .then((res) => {
        setReviewData(res.data);
      })
      .catch((error) => {
        if (error.response) {
          setReviewNone(error.response.data.message);
        } else {
          setReviewNone(
            "An unexpected error occurred while fectching reviews. Please try again."
          );
          console.error("An error occurred:", error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage("");

    setReviewsData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      reviewsData.name === "" ||
      reviewsData.location === "" ||
      reviewsData.message === ""
    ) {
      setErrorMessage("Please fill all required fields");
    } else {
      setErrorMessage("");
      setLoading(true);
      axios
        .post(url, reviewsData)
        .then((res) => {
          // Reset the form after successful submission
          setReviewsData({ name: "", location: "", message: "" });
          setSuccessToast(true);
          getReviews();
          // Close the success toast after 15 seconds
          setTimeout(() => {
            setSuccessToast(false);
          }, 15000);
        })
        .catch((error) => {
          if (error.response) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage("An unexpected error occurred. Please try again.");
            console.error("An error occurred:", error.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Ultimates Roofing LLC - Reviews</title>
        <link rel="canonical" href="https://www.ultimatesroofing.com/reviews" />
        <meta
          name="description"
          content="Read reviews from satisfied clients who have experienced Ultimates Roofing LLC's exceptional construction and home improvement services. Discover why we are a trusted partner for roofing, siding, windows, and more."
        />
        <meta
          name="keywords"
          content="Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet"
        />
        <meta name="author" content="Ultimates Roofing LLC" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      {successToast ? (
        <Toast
          style={{ position: "fixed", top: "9%", right: 0, color: "#fff" }}
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">THANK YOU</strong>
          </Toast.Header>
          <Toast.Body>Thank you for sharing your feedback with us!</Toast.Body>
        </Toast>
      ) : null}

      <div className="projects-main">
        <p className="projects-us">
          <span style={{ color: "#B22335", fontWeight: "bold" }}>I</span>{" "}
          Reviews
        </p>
        <p className="projects-page-text">
          Our valued clients graciously shared their meaningful experiences,
          illuminating the profound impact of our roofing solutions. These
          testimonials, echoing with the resonance of satisfaction, went beyond
          mere words, offering a deep dive into our historical dedication to
          unmatched quality, groundbreaking innovation, and unwavering customer
          satisfaction. Each testimonial became a living testament to the
          enduring ethos that has defined our journey, showcasing the tangible
          difference our past commitment has made in elevating properties and
          exceeding expectations.
        </p>
      </div>

      {/**    Error Message when fectching reviews data           */}
      <div className="review-none">{reviewNone}</div>

      <Row className="reviews-section">
        {reviewData
          .slice(0, showAllReviews ? reviewData.length : 12)
          .map((review, index) => (
            <Col key={index} style={{ padding: "0" }}>
              <Card className="review-cards">
                <div className="reviewcard-heading">
                  <h2 className="review-client">{review.reviewerName}</h2>
                  <div className="review-place">{review.reviewerLocation}</div>
                </div>
                <hr style={{ color: "#F9F9F9" }} />
                <div className="reviewcard-description">
                  <img
                    className="quote"
                    src={Quote}
                    alt="Ultimates Roofing LLC reviews-quote"
                  />
                  <p className="projects-page-text">{review.reviewerMessage}</p>
                </div>
              </Card>
            </Col>
          ))}
      </Row>

      {reviewData.length > 12 && !showAllReviews && (
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => setShowAllReviews(true)}
            className="view-more-btn"
          >
            View More
          </Button>
        </div>
      )}

      <Row className="reviews-section1">
        <Accordion defaultActiveKey="0" style={{ marginTop: "3rem" }}>
          {reviewData.map((review, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <div>
                  {review.reviewerName}
                  <div style={{ fontSize: "13px" }}>
                    {review.reviewerLocation}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <img
                  className="quote"
                  src={Quote}
                  alt="Ultimates Roofing LLC reviews-quote"
                />
                <p className="reviews-para-mobile">{review.reviewerMessage}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Row>

      <div className="projects-main1">
        <h2 className="service-page-heading">Share Your Experience</h2>
        <p className="projects-page-text">
          Please take a moment to share your experience with Ultimates Roofing
          LLC. Your feedback helps us continually improve our services and
          assists future customers in making informed decisions. Thank you for
          being a part of our journey.
        </p>
        <Row style={{ margin: "4rem 0px 0px" }}>
          <Col className="form-image-col">
            <img
              className="quote-image"
              src={ReviewsPageImage}
              alt="Ultimates Roofing LLC Quote"
            />
          </Col>
          <Col>
            <Form>
              <Row className="names-roww">
                <Col>
                  <Form.Group>
                    <Form.Label className="label">
                      Full Name <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={reviewsData.name}
                      onChange={handleInputChange}
                      isInvalid={errorMessage}
                      className="input"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="names-roww">
                <Col>
                  <Form.Group>
                    <Form.Label className="label">
                      Location <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={reviewsData.location}
                      onChange={handleInputChange}
                      isInvalid={errorMessage}
                      className="input"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="names-roww">
                <Form.Group>
                  <Form.Label className="label">
                    Please share your feedback <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={reviewsData.message}
                    onChange={handleInputChange}
                    placeholder="Please enter your Feedback"
                    className="input"
                    style={{ height: "20vh" }}
                  />
                </Form.Group>
              </Row>
              <div className="errormessage">
                {errorMessage !== "" ? (
                  <div>
                    <p style={{ margin: "0px" }}>{errorMessage}</p>
                  </div>
                ) : null}
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="review-btn"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <LogosComponent />

      {loading ? (
        <div className="loading-overlay">
          <div className="loading-indicator">
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReviewsPage;
