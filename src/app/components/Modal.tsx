import React from 'react';

interface ModalProps {
    content: string | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
    if (!content) {
        return null;
    }

    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOutsideClick}>
            <div className="modal-content bg-white border-orange-500 border-2 rounded shadow-lg p-8 md:p-10 lg:p-12 m-4 max-w-xs md:max-w-3xl relative">
                <span className="close-button absolute top-2 right-4 text-lg md:text-xl lg:text-2xl cursor-pointer" onClick={onClose}>&times;</span>
                <p className="text-center text-sm md:text-base lg:text-lg">{content}</p>
            </div>
        </div>
    );
};

export default Modal;
