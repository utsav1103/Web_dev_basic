// Basic use of slice

const greeting = "Hello , world";
const extractWord = greeting.slice(7, 13);
console.log(extractWord);

const text = "Hello Senorita";
const result = text.slice(7);

const text1 = "Hello darlin";
const endText = text1.slice(-6);
console.log(endText);

//------ using string split method

//simple split

const sentence = "Hello, Nejuko";
const words = sentence.split(" ");
console.log(words);

//limit number split

const myText = "apple , banana, pear";
const mimit = myText.split(",", 2);

// split by multiple characters

const complex = "apple:banna;you";
const fruits = complex.split(/[:;]/);

// split into characters

const wor = "MyDarlin";
const vor = wor.split("");

//------.indexof() method

//basic usage

const senten = "Konnichiwa";
const index1 = senten.indexOf("w");

//----using string .trim property

// const sentences = '  arigato@gmail.com   '
// const email = sentences.trim()

// // removing line break
// const input = '\n\t Hello, world';
// const output = input.trim()