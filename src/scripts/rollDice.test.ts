import rollDice from './rollDice';

describe('rollDice', () => {
  test('returns a number between 1 and 6', () => {
    const result = rollDice(1, 6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  test('returns a number between the number of dice and the number of dice times the dice size', () => {
    const numberOfDice = 2;
    const diceSize = 6;
    const result = rollDice(numberOfDice, diceSize);
    expect(result).toBeGreaterThanOrEqual(numberOfDice);
    expect(result).toBeLessThanOrEqual(numberOfDice * diceSize);
  });

  test('throws an error when numberOfDice or diceSize is not a number', () => {
    expect(() => rollDice('a' as any, 6)).toThrow('Both numberOfDice and diceSize must be numbers');
    expect(() => rollDice(2, 'b' as any)).toThrow('Both numberOfDice and diceSize must be numbers');
  });

  test('throws an error when numberOfDice or diceSize is less than or equal to 0', () => {
    expect(() => rollDice(0, 6)).toThrow('Both numberOfDice and diceSize must be greater than 0');
    expect(() => rollDice(2, 0)).toThrow('Both numberOfDice and diceSize must be greater than 0');
  });

  test('returns a number between 2 and 12 for 2 dice with size 6', () => {
    const result = rollDice(2, 6);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(12);
  });

  test('returns a number between 3 and 18 for 3 dice with size 6', () => {
    const result = rollDice(3, 6);
    expect(result).toBeGreaterThanOrEqual(3);
    expect(result).toBeLessThanOrEqual(18);
  });
});

