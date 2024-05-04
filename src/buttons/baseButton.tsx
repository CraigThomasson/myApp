import React from 'react';
import './baseButton.css';

interface BaseButtonProps {
  onClick: () => void; 
  text: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ onClick, text }) => { 
  return (
    <button className='base-button' onClick={onClick}> {}
      {text}
    </button>
  );
};

export default BaseButton;