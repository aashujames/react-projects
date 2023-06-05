import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ setShowModal }) => {
    return (
        <div className="modal-overlay show-modal">
            <div className="modal-container">
                <div
                    className="close-modal-btn"
                    onClick={() => setShowModal(false)}
                >
                    <FaTimes />
                </div>
                <h3>Modal Content</h3>
            </div>
        </div>
    );
};

export default Modal;
