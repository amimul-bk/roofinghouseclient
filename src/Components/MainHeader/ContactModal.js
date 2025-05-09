import { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaPhoneVolume } from "react-icons/fa6";

function ContactModal() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div className="d-flex align-items-center gap-2  ">
                <div>
                    <FaPhoneVolume className="phone-icon" />
                    <a href="tel:+16143249797" className="phone-number">
                        (614) 324-9797
                    </a>
                </div>

                <Button
                    variant="primary"
                    className="mega-cta-nav"
                    onClick={handleShow}
                >
                    Instant Roof Quote
                </Button>
            </div>


            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Instant Roof Quote</Modal.Title>


                </Modal.Header>
                <div className="mx-auto justify-content-center">
                    <p className="mx-2"> Please email us with your Details
                        <p>roofs@ultimatesroofing.com  </p> or call us
                    </p>
                    <p className="px-2 d-flex justify-content-center mx-auto"> OR  </p>
                    <p className="mx-2">
                        for Further Assistances on Accurate Quotes.</p>
                </div>

                <Modal.Body className="contact-modal-body">

                    <ContactForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;
