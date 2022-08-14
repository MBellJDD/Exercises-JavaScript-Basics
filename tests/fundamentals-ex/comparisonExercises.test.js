import { compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20, isJane } from "../../src/fundamentals-ex/comparisonExercises.js";

describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Jane';
        const result = isJane(name);
        expect(result).toEqual('Jane');
    });

    test('should return in not Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Donald';
        const result = isJane(name);
        expect(result).toEqual('Is not Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = 10;
        let number2 = 10;
        let result = compareNumbers (number1, number2);
        expect(result).toEqual(10);
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity = 15;
        const result = isGreaterThan10(quantity)
        
        expect(result).toBeGreaterThan(10);
        expect(result).toBe(15)
    });
});

describe('Logical comparison', () => {
    test('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        const result = isGreaterThan10AndEqualTo20(10)
        
        expect(result).toBeGreaterThan(10);
        expect(result).toEqual(20);
    });
});