import { concatenateStrings, giveOneLetter, returnAString, returnHello } 
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

















    test.skip('should return letter g', () => 
    {
        const result = giveOneLetter
        expect(result).toBe('g');
    });


    test.skip('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        const result = giveTheIndexOfWord();

        expect().toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */

        expect().toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        
        expect().toBe('RIDE HIM, COWBOY');
    });

    test.skip('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */

        expect().toBe('Hands Down');
    });
});