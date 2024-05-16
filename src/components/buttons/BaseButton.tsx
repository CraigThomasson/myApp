import React from 'react';
import './BaseButton.css';

interface BaseButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent) => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({ text, type = "button", onClick }) => {
    return (
        <button className='base-button' type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default BaseButton;