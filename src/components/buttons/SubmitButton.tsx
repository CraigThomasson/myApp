import React from 'react';
import BaseButton from './BaseButton';

interface SubmitButtonProps {
    text: string;
    onSubmit: (event: React.FormEvent) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, onSubmit }) => {
    return (
        <BaseButton type="submit" onClick={onSubmit} text={text} />
    );
};

export default SubmitButton;