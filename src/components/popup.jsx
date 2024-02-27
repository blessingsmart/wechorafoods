import React from "react";
import Modal from "react-modal";

const Popup = ({ isOpen, onClose, message }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} 
        className={"flex flex-col justify-center items-center"} >
            <div>{message}</div>
            <button onClick={onClose} 
            className="mt-6  bg-orange-600 px-3 text-white rounded-full p-2">Close</button>
        </Modal>
    );
};

export default Popup;
