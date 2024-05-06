function rollDice(numberOfDice: number = 1, diceSize: number = 6): number {
    numberOfDice = numberOfDice || 1; 
    diceSize = diceSize || 6;
    if (typeof numberOfDice !== 'number' || typeof diceSize !== 'number') {
        throw new Error('Both numberOfDice and diceSize must be numbers');
    }
    if (numberOfDice <= 0 || diceSize <= 0) {
        throw new Error('Both numberOfDice and diceSize must be greater than 0');
    }

    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        let currentTotal =  Math.floor(Math.random() * diceSize) + 1;
        total += currentTotal;
    }
    return total;
}

export default rollDice;