import React from "react";

const Modal = ({ children, visible, onClose }) => {
    if (!visible) return null;

    const handleBackdropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };

    return (
        <div
            id="backdrop"
            onClick={handleBackdropClick}
            className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 flex items-center justify-center"
        >
            {children}
        </div>
    );
};

export default Modal;
