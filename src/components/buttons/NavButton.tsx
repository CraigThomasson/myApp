import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseButton from './BaseButton';

interface NavButtonProps {
    to: string;
    text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, text }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(to);
    };

    return (
        <BaseButton onClick={handleClick} text={text} /> 
    );
};

export default NavButton;