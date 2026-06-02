import { describe, expect, test } from 'vitest';
import { checkNumber } from './src/fizzbuzz.js';

describe('Fizzbuzz', () => {

  test('should return Fizz when number is divisible by 3', () => {
    const result = checkNumber(3);
    expect(result).toBe('Fizz');
  });

  test('should return Buzz when number is divisible by 5', () => {
    const result = checkNumber(5);
    expect(result).toBe('Buzz');
  });

  test('should return FizzBuzz when number is divisible by 3 and 5', () => {
    const result = checkNumber(15);
    expect(result).toBe('FizzBuzz');
  });

  test('should return the number as string when not divisible by 3 or 5', () => {
    const result = checkNumber(7);
    expect(result).toBe('7');
  });

  test('should throw an error when the value is not a number', () => {
    expect(() => checkNumber('hola')).toThrow('El dato no es un número');
  });

});