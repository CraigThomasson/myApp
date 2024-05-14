import React from "react";
import './Popup.css';

interface PopupProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="popup-message">{message}</span>
                <button className="popup-close" onClick={onClose}>Close</button>
            </div>
        </div>      
    );
};

export default Popup;