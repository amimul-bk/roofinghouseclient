import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button, Spinner } from 'react-bootstrap'
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './ContactPage.css'
import LogosComponent from '../HomePage/LogosComponent/LogosComponent';
import { Helmet } from 'react-helmet';

function ContactPage() {

    const url = 'https://www.ultimatesroofing.com/ultimates-backend/ultimates/customer/register'

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        service: '',
        address: '',
        state: '',
        city: '',
        zipCode: '',
        message: '',
        source: 'contactForm',
    });
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // Handle input change for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');

        setDetails((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Validations
        if (details.firstName === '' || details.lastName === '' || details.phoneNumber === '' || details.email === '' || details.address === '' || details.state === '' || details.city === '' || details.zipCode === '' || details.service === '') {
            setErrorMessage("Please fill all required fields");
        } else if (details.phoneNumber.length !== 10) {
            setErrorMessage("PhoneNumber is not valid");
        } else if (!emailPattern.test(details.email)) {
            setErrorMessage("E-Mail is not valid");
        } else if (details.zipCode.length !== 5) {
            setErrorMessage("ZipCode is not valid");
        } else if (images.length > 3) {
            setErrorMessage("Please select only up to 3 images.");
        } else {
            setErrorMessage('');
            setLoading(true);

            const formData = new FormData();

            // Append customer details as a nested object with key 'customer'
            formData.append('customerJson', JSON.stringify(details));

            // Append each image file to the FormData with the correct field name 'files'
            images.forEach((image, index) => {
                formData.append('files', image);
            });

            axios.post(url, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(res => {

                navigate("/success-page")

            }).catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Servers are down please try after sometime');
                    console.error("An error occurred:", error.message);
                }
            }).finally(() => {
                setLoading(false);
            });
        }
    };

    //  Scroll to top and set visibility
    useEffect(() => {
        window.scrollTo(0, 0);
        setVisible(true);
    }, []);

    // Handle image selection for form
    const handleImageChange = (e) => {
        const files = e.target.files;
        setErrorMessage('');

        const maxSize = 5 * 1024 * 1024; // 5MB in bytes

        if (files.length > 3) {
            setErrorMessage('Please select only up to 3 images.');
            return;
        }

        const oversizedImages = Array.from(files).filter((file) => file.size > maxSize);

        if (oversizedImages.length > 0) {
            setErrorMessage('Please ensure that all selected images are under 5MB in size.');
            return;
        }

        setImages([...files]);
    };



    return (
        <div className='contact-page'>

            {/* Helmet component for SEO meta tags */}
            <Helmet>
                <title>Ultimates Roofing LLC - Contact Us</title>
                <link rel="canonical" href="https://www.ultimatesroofing.com/contact" />
                <meta name='description' content='Get in touch with Ultimates Roofing LLC for all your construction and home improvement needs. Whether you have questions, need a quote, or want to discuss a project, our team is here to assist you.' />
                <meta name='keywords' content='Ultimates Roofing llc, Ultimates Roofing, Best Roofing design in columbus,ohio, Best Roofing Companies in columbus ohio, ultimates roof replacement near me, best roofing designs for small houses, best roofing drip edge, best roof columbus, best roofing company near me, ultimates roof replacement columbus ohio, 
                best roofing company, ultimates roof repair columbus ohio, affordable roof, eplacement services in columbus,ohio, luxury home roofing solutions near me, roof repair, Roofer near me, roofing repairs near me, roofing sheet' />
                <meta name='author' content='Ultimates Roofing LLC' />
                <meta name='robots' content='index, follow' />
                <html lang="en" />
            </Helmet>

            {/* Contact Information Section */}
            <div className='contact-us'>
                <h2 className='contact-heading'>Contact Us</h2>
                <Row style={{ margin: "1px auto" }} className='contact-sections-row'>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><LuPhone className='contact-icon' /> Call Us</p>
                                <p className='address-text'>614-357-7539</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><IoMailOutline className='contact-icon' /> E-mail</p>
                                <p className='address-text'>sales - roofs@ultimatesolutionsit.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><SlClock className='contact-icon' /> Timings</p>
                                <p className='address-text'>Monday - Friday</p>
                                <p className='address-text'>9 AM - 5 PM</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`contact-sections ${visible ? 'fade-in visible' : 'fade-in'}`}>
                            <div className='contact-text'>
                                <p style={{ fontWeight: "bold", fontSize: "23px" }}><CiLocationOn className='contact-icon' /> Address</p>
                                <p className='address-text'>2756 Sawbury Blvd</p>
                                <p className='address-text'>Columbus, Ohio 43235, USA</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Contact Form Section */}
            <div style={{ marginTop: "5rem" }}>
                <h2 className='contact-form-heading'>Reach Out To Us</h2>
                <Row className='contact-form'>
                    <Col>
                        <Form>
                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            First Name <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={details.firstName}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            Last Name <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={details.lastName}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            Phone Number <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="phoneNumber"
                                            value={details.phoneNumber}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            Email <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={details.email}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            Service <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Select
                                            name="service"
                                            value={details.service}
                                            onChange={handleInputChange}
                                            placeholder='Choose a service'
                                            className="input"
                                        >
                                            <option></option>
                                            <option value="residential">Residential Roofing</option>
                                            <option value="commercial">Commercial Roofing</option>
                                            <option value="siding">Siding</option>
                                            <option value="gutters">Gutters</option>
                                            <option value="windows">Windows</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            Address <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="address"
                                            value={details.address}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row className='names-roww'>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            State <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="state"
                                            value={details.state}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            City <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="string"
                                            name="city"
                                            value={details.city}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="label">
                                            ZipCode <span style={{ color: 'red' }}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="zipCode"
                                            value={details.zipCode}
                                            onChange={handleInputChange}
                                            isInvalid={errorMessage}
                                            className="input"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row className='names-roww'>
                                <Form.Group>
                                    <Form.Label className='label'>Upload Images</Form.Label>
                                    <Form.Control
                                        type='file'
                                        name='images'
                                        onChange={handleImageChange}
                                        accept='image/*'
                                        multiple
                                        className='input'
                                    />
                                </Form.Group>
                                <div style={{ color: "#969696", paddingTop: "6px" }}>Note: Please upload up to 3 images in either .png or .jpg format, and ensure that each file size is below 5MB.</div>
                            </Row>

                            <Row className='names-roww'>
                                <Form.Group>
                                    <Form.Label className="label">
                                        Message
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={details.message}
                                        onChange={handleInputChange}
                                        placeholder='Please share detailed information about your project to help us understand better.'
                                        className="input"
                                        style={{ height: "15vh" }}
                                    />
                                </Form.Group>
                            </Row>
                            <div className="errormessage">
                                {errorMessage !== '' ? (
                                    <div>
                                        <p style={{ margin: "0px" }}>{errorMessage}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 6rem" }} className='estimate-btn'>
                                    Send Now
                                </Button>
                            </div>

                        </Form>
                    </Col>
                    <Col className='image-coll'>
                        <iframe className='map-style' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195656.61280534012!2d-83.15563599435002!3d39.98309783384798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH%2C%20USA!5e0!3m2!1sen!2sin!4v1703668481347!5m2!1sen!2sin" allowFullScreen="" loading="lazy" title="Google Maps" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </div>

            {/* Logos Component */}
            <LogosComponent />

            {/* Loading Spinner Overlay */}
            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ContactPage