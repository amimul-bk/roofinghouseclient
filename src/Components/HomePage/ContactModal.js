import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../MainHeader/Header.css'
import ContactForm from "../MainHeader/ContactForm";
import './Vedio/Video.css'

function ContactModal() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div className="d-flex align-items-center gap-2  ">


                <Button
                    variant="primary"
                    className="phonebtn font"
                    onClick={handleShow}
                >
                    Get Your Free Estimate
                </Button>
            </div>


            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fontHauora"> Get Your Free Estimate </Modal.Title>

                </Modal.Header>

                <div className="mx-auto justify-content-center my-2">
                    <div className="mx-2 px-md-1 px-2 text-center">
                        <p className="text-center fontHauora"> Please call and email us with your Details</p>
                        <div className="">
                            <p className="my-0 py-0 fontLight">
                                 <FaPhoneVolume className="phone-icon ms-1 me-1" />
                            <a href="tel:+1614-357-7539" className="phone-number fontLight">
                                614-357-7539
                            </a>
                            </p>
                          <p className="d-flex align-items-center gap-1 text-center justify-content-center fontLight">  
                                <MdEmail className="color" />
                            <a
                                href="mailto:roofs@ultimatesroofing.com"
                                className="text-decoration-none d-flex align-items-center fontLight"
                            >
                                roofs@ultimatesroofing.com
                            </a> </p> 

                            
                           
                             </div>

                       
                    </div>
                    <p className="px-2 d-flex justify-content-center mx-auto text-center fontLight"> OR </p>
                    <p className="mx-2 text-center fontLight">
                       Leave your Information below
                    </p>
                </div>


                <Modal.Body className="contact-modal-body">

                   
                    <ContactForm handleClose={handleClose}></ContactForm>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;
