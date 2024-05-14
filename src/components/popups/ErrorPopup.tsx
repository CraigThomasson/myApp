import React from "react";
import Popup from "./Popup";

interface ErrorPopupProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, isVisible, onClose}) => {
    return (
        <Popup
            message={message}
            isVisible={isVisible}
            onClose={onClose}
        />
    );
};

export default ErrorPopup;