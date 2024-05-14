import React, { useState } from 'react';
import './ExploreContainer.css';
import BaseButton from '../buttons/BaseButton';
import ErrorPopup from '../popups/ErrorPopup';
import rollDice from '../../scripts/rollDice';
import './DisplayDiceResult.css';

interface ContainerProps {
    name: string;
}

const DisplayDiceResult: React.FC<ContainerProps> = ({ name }) => {
    const [number, setNumber] = useState<number | null>(null);
    const [diceSize, setDiceSize] = useState<string>('6');
    const [numberOfDice, setNumberOfDice] = useState<string>('1');
    const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleRollDice = () => {
        try {
            const result = rollDice(Number(numberOfDice), Number(diceSize));
            setNumber(result);
        } catch (error) {
            setErrorMessage(error.message);
            setIsErrorVisible(true);
        }
    };

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
                <BaseButton onClick={handleRollDice} text='Roll Dice' />
            </div>
            {number !== null && <p>Result: {number}</p>}
            <ErrorPopup
                message={errorMessage}
                isVisible={isErrorVisible}
                onClose={() => setIsErrorVisible(false)}
            />
        </div>
    );
};

export default DisplayDiceResult;
