import React, { useState } from 'react';
import './ExploreContainer.css';
import BaseButton from '../../buttons/baseButton';
import rollDice from '../../scripts/rollDice';

interface ContainerProps {
    name: string;
}

const DisplayDiceResult: React.FC<ContainerProps> = ({ name }) => {
    const [number, setNumber] = useState(0);
    return (
        <div className="container">
            <strong>{name}</strong>
            <div>
                <BaseButton onClick={() => setNumber(rollDice(8,8))} text='Roll Dice' />
            </div>
            <p>{number}</p>
         
        </div>
    );
};

export default DisplayDiceResult;