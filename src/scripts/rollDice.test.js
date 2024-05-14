import rollDice from './rollDice';

describe('rollDice', () => {
  it('returns a number between the number of dice and the number of dice times the dice size', () => {
    const numberOfDice = 2;
    const diceSize = 6;
    const result = rollDice(numberOfDice, diceSize);
    expect(result).toBeGreaterThanOrEqual(numberOfDice);
    expect(result).toBeLessThanOrEqual(numberOfDice * diceSize);
  });

  it('throws an error when numberOfDice or diceSize is not a number', () => {
    expect(() => rollDice('a', 6)).toThrow('Both numberOfDice and diceSize must be numbers');
    expect(() => rollDice(2, 'b')).toThrow('Both numberOfDice and diceSize must be numbers');
  });

  it('throws an error when numberOfDice or diceSize is less than or equal to 0', () => {
    expect(() => rollDice(0, 6)).toThrow('Both numberOfDice and diceSize must be greater than 0');
    expect(() => rollDice(2, 0)).toThrow('Both numberOfDice and diceSize must be greater than 0');
  });
});