import React, { useState } from 'react';
import './ExploreContainer.css';
import BaseButton from '../../buttons/baseButton';
import rollDice from '../../scripts/rollDice';
import './DisplayDiceResult.css';

interface ContainerProps {
    name: string;
}

const DisplayDiceResult: React.FC<ContainerProps> = ({ name }) => {
    const [number, setNumber] = useState(0);
    const [diceSize, setDiceSize] = useState('6');
    const [numberOfDice, setNumberOfDice] = useState('1');

    return (
        <div className="container">
            <strong>{name}</strong>
            <div>
                <label>
                    Dice Size:
                    <input type="number" value={diceSize} onChange={e => setDiceSize(e.target.value)} />
                </label>
                <label>
                    Number of Dice:
                    <input type="number" value={numberOfDice} onChange={e => setNumberOfDice(e.target.value)} />
                </label>
                <BaseButton onClick={() => setNumber(rollDice(Number(numberOfDice), Number(diceSize)))} text='Roll Dice' />
            </div>
            <p>{number}</p>
        </div>
    );
};

export default DisplayDiceResult;