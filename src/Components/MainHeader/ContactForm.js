import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    Button,
    Col,
    Row,
    Spinner,
    Alert,
    Form as BootstrapForm,
} from "react-bootstrap";
import "./ContactForm.css"; // 🟢 Uses custom CSS here
import './Header.css'

const contactFormValidationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    message: Yup.string().optional(),
});

export default function ContactForm({ source = "modal", handleClose }) {
    const url =
        "https://www.ultimatesroofing.com/ultimates-backend/ultimates/customer/register";

    const handleSubmit = async (
        values,
        { setStatus, resetForm, setSubmitting }
    ) => {
        setStatus(null);
        try {
            const formData = new FormData();
            formData.append(
                "customerJson",
                JSON.stringify({
                    ...values,
                    source,
                })
            );

            await axios.post(url, formData);

            resetForm();
            handleClose();
            alert(
                source === "request"
                    ? "We will call you back shortly."
                    : "We will get back to you as soon as possible."
            );
        } catch (err) {
            alert("We will get back to you as soon as possible.");
            handleClose();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                message: "",
            }}
            validationSchema={contactFormValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, status }) => (
                <Form className="quote-form-formik">
                    {status?.error && (
                        <Alert variant="danger" className="mb-3">
                            {status.error}
                        </Alert>
                    )}

                    <Row className="mb-3">
                        <Col md={6}>
                            <BootstrapForm.Group controlId="firstName">
                                <BootstrapForm.Label>
                                    First Name <span className="text-danger">*</span>
                                </BootstrapForm.Label>
                                <Field
                                    name="firstName"
                                    as={BootstrapForm.Control}
                                    placeholder="Type Your First Name"
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component={BootstrapForm.Control.Feedback}
                                    type="invalid"
                                />
                            </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                            <BootstrapForm.Group controlId="lastName">
                                <BootstrapForm.Label>
                                    Last Name <span className="text-danger">*</span>
                                </BootstrapForm.Label>
                                <Field
                                    name="lastName"
                                    as={BootstrapForm.Control}
                                    placeholder="Type Your Last Name"
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component={BootstrapForm.Control.Feedback}
                                    type="invalid"
                                />
                            </BootstrapForm.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <BootstrapForm.Group controlId="phoneNumber">
                                <BootstrapForm.Label>
                                    Phone Number <span className="text-danger">*</span>
                                </BootstrapForm.Label>
                                <Field
                                    name="phoneNumber"
                                    as={BootstrapForm.Control}
                                    placeholder="e.g. +1 5551234567"
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    component={BootstrapForm.Control.Feedback}
                                    type="invalid"
                                />
                            </BootstrapForm.Group>
                        </Col>
                        <Col md={6}>
                            <BootstrapForm.Group controlId="address">
                                <BootstrapForm.Label>
                                    Address <span className="text-danger">*</span>
                                </BootstrapForm.Label>
                                <Field
                                    name="address"
                                    as={BootstrapForm.Control}
                                    placeholder="Type Your address"
                                />
                                <ErrorMessage
                                    name="address"
                                    component={BootstrapForm.Control.Feedback}
                                    type="invalid"
                                />
                            </BootstrapForm.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <BootstrapForm.Group controlId="message">
                                <BootstrapForm.Label>
                                    Message (Optional)
                                </BootstrapForm.Label>
                                <Field
                                    name="message"
                                    as="textarea"
                                    className="form-control"
                                    rows={4}
                                    placeholder="Type Your message..."
                                />
                                <ErrorMessage
                                    name="message"
                                    component={BootstrapForm.Control.Feedback}
                                    type="invalid"
                                />
                            </BootstrapForm.Group>
                        </Col>
                    </Row>

                    <div className="text-center mt-4">
                        <Button
                            type="submit"
                            className="submit-btn-custom custom-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{" "}
                                    Submitting…
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
