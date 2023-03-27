import { romanToInt } from "../RomanToInteger";

test('myFunction should return 3', () => {
  const result = romanToInt("III");
  expect(result).toBe(3);
});

test('myFunction should return 58', () => {
  const result = romanToInt("LVIII");
  expect(result).toBe(58);
});

test('myFunction should return 1994', () => {
  const result = romanToInt("MCMXCIV");
  expect(result).toBe(1994);
});