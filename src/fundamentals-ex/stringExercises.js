//NUMBER ONE
export function returnHello() 
{
    return "Hello"
}
//NUMBER TWO
export function returnAString() {
    return "Hello World"
}
//NUMBER THREE
export function concatenateStrings() {
    const firstWord = 'I';
    const secondWord = 'Love';
    const phrase = `${firstWord} ${secondWord} JS`;
    return (phrase)
}
//NUMBER FOUR
export function giveOneLetter() {
    const word = 'dog';
    const letterPosition = word.indexOf('g');
    return word[letterPosition]
}
//NUMBER FIVE
export function giveTheIndexOfWord() {
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    const newPhrase = phrase.indexOf(wordToSearch);
    return newPhrase;
}
//NUMBER SIX
export function replaceFishWords() {
    let phrase = 'Give a Man a Fish';
}
//NUMBER SEVEN
export function giveAllLettersInUppercase() {
    let phrase = 'Ride Him, Cowboy!';
}
//NUMBER EIGTH
export function removeWhiteSpaces() {
    let phrase = '    Hands Down    ';

}