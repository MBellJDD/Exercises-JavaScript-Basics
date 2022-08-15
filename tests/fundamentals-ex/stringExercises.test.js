import { concatenateStrings, giveOneLetter, giveTheIndexOfWord, returnAString, returnHello } 
from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
//TEST NUMBER 1    
    test('should say Hello', () => 
    {
        const word = "Hello";
        expect(returnHello()).toBe('Hello');
    });
//TEST NUMBER TWO
    test('should return Hello World', () => 
    {
        const result = returnAString();
        expect(result).toBe('Hello World');
    });
//TEST NUMBER THREE 
    test('should be return I Love JS', () => 
    {
        const result = concatenateStrings();
        expect(result).toBe('I Love JS');
    });
//TEST NUMBER FOUR
    test('should return letter g', () => 
    {
        const result = giveOneLetter();
        expect(result).toBe('g');
    });
//TEST NUMBER FIVE
    test('should return -1', () => {
        const result = giveTheIndexOfWord();
        expect(result).toEqual(-1);
    });
//TEST NUMBER SIX
    test.skip('should return "Give a Man a Pussy Cat" ', () => {

        expect().toBe('Give a Man a Pussy Cat');
    });
//TEST NUMBER SEVEN
    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        expect().toBe('RIDE HIM, COWBOY');
    });
//TEST NUMBER EIGTH
    test.skip('should return "Hands Down"', () => {

        expect().toBe('Hands Down');
    });
});