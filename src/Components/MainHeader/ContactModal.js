import { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactModal() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div className="d-flex align-items-center gap-2  ">


                <Button
                    variant="primary"
                    className="mega-cta-nav custom-btn"
                    onClick={handleShow}
                >
                    Instant Roof Quote
                </Button>
            </div>


            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Instant Roof Quote</Modal.Title>

                </Modal.Header>

                <div className="mx-auto justify-content-center my-3">
                    <div className="mx-2 px-md-1 px-2">
                        Please call and email us with your Details 
                        <div className="">
                            <p className="my-0 py-0">
                                 <FaPhoneVolume className="phone-icon ms-1 me-1" />
                            <a href="tel:+1614-357-7539" className="phone-number">
                                614-357-7539
                            </a>
                            </p>
                          <p className="d-flex align-items-center gap-1">  
                                <MdEmail  />
                            <a
                                href="mailto:roofs@ultimatesroofing.com"
                                className="text-decoration-none d-flex align-items-center"
                            >
                                roofs@ultimatesroofing.com
                            </a> </p> 

                            
                           
                             </div>

                       
                    </div>
                    <p className="px-2 d-flex justify-content-center mx-auto"> OR </p>
                    <p className="mx-2">
                        Leave a message for Further Assistances on Accurate Quotes.
                    </p>
                </div>


                <Modal.Body className="contact-modal-body">

                    <ContactForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;
