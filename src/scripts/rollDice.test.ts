import rollDice from './rollDice';

describe('rollDice', () => {
  test('returns a number between 1 and 6', () => {
    const result = rollDice();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });
});
