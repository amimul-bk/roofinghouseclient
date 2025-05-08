import { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ContactModal() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Button
                variant="primary"
                className="mega-cta-nav"
                onClick={handleShow}
            >
                Instant Roof Quote
            </Button>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact US</Modal.Title>
                </Modal.Header>

                <Modal.Body className="contact-modal-body">
                    <ContactForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;
