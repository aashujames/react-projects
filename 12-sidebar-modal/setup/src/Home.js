import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    };

    return (
        <main>
            <div className="sidebar-toggle">
                <FaBars />
            </div>
            <button className="btn" onClick={handleModal}>
                Show Modal
            </button>
            {showModal && <Modal setShowModal={setShowModal} />}
        </main>
    );
};

export default Home;
