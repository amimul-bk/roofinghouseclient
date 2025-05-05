
import React, { useState } from 'react'
import { Button, Col, Row, Form, Spinner } from 'react-bootstrap';
import './MainHeader.css'
import axios from 'axios';

function InstantRoofQuote({ source, handleClose }) {
    // API endpoint for form submission
    const url = 'https://www.ultimatesroofing.com/ultimates-backend/ultimates/customer/register';

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        source: 'modal',
        message: '',
    });

    // Event handler for input changes
    const handleInputChange1 = (e) => {
        const { name, value } = e.target;
        setErrorMessage('');

        setDetails((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (details.firstName === '' || details.lastName === '' || details.phoneNumber === '') {
            setErrorMessage("Please fill all required fields");
        } else if (details.phoneNumber.length !== 10) {
            setErrorMessage("PhoneNumber is not valid");
        } else {
            setErrorMessage('');
            setLoading(true);
            SubmitData(details);
        }
    };

    // Function to submit form data to the server
    const SubmitData = (ModalData) => {
        const formData = new FormData();
        formData.append('customerJson', JSON.stringify(ModalData));
        axios.post(url, formData)
            .then(res => {
                // Reset the form after successful submission
                setDetails({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    source: 'modal',
                    message: '',
                });

                if (source === 'request') {
                    alert('We will call you back shortly.')
                } else {
                    alert('We will get back to you as soon as possible.');
                }
                // Close the modal after successful submission
                handleClose();

            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An unexpected error occurred. Please try again.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }


    return (
        <div>
            {/* Form Component */}
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Form className='model-form'>
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
                                    onChange={handleInputChange1}
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
                                    onChange={handleInputChange1}
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
                                    onChange={handleInputChange1}
                                    isInvalid={errorMessage}
                                    className="input"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    {source === 'message' ? (
                        <Row className='names-roww'>
                            <Form.Group>
                                <Form.Label className="label">
                                    Message
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={details.message}
                                    onChange={handleInputChange1}
                                    placeholder='Please enter your message'
                                    className="input"
                                    style={{ height: "8vh" }}
                                />
                            </Form.Group>
                        </Row>
                    ) : null}
                    <div className="errormessage">
                        {errorMessage !== '' ? (
                            <div>
                                <p style={{ margin: "0px" }}>{errorMessage}</p>
                            </div>
                        ) : null}
                    </div>
                    {/* Submit Button */}
                    <div style={{ textAlign: "center" }}>
                        <Button onClick={handleSubmit} type="submit" style={{ marginTop: "2rem", padding: "1rem 5rem" }} className='form-btn'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div >

            {/* Loading Spinner */}
            {loading ? (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            ) : null}

        </div >
    );
};
export default InstantRoofQuote