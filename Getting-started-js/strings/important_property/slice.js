// Basic use of slice

const greeting = "Hello , world";
const extractWord = greeting.slice(7, 13);
// console.log(extractWord);

const text = "Hello Senorita";
const result = text.slice(7);

const text1 = "Hello darlin";
const endText = text1.slice(-6);
// console.log(endText);

//------ using string split method

//simple split

const sentence = "Hello, Nejuko";
const words = sentence.split(" ");
// console.log(words);

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

const sentences = '  arigato@gmail.com   '
const email = sentences.trim()

// removing line break
const input = '\n\t Hello, world';
const output = input.trim()



//--- using replace method

//basic usage 

const text2 = 'This is an old Text.';
const update = text2.replace('old','new');


// repeted
const text3 = 'old text with old words';
const updated = text3.replace(/old/g,'new');


//==== using .includes method

const abc ='I have an apple';

const res = abc.includes('apple')

//cheking for a character
const res1 =abc.includes('I');

//specifying specific position

const resa = abc.includes('apple', 8);



//=== converting to stirng


//.string method

const num = 43;
const strNum = String(num)
// console.log(typeof strNum);

//boolean to string
const bool = true;
const strBool = String(bool);
// console.log(typeof strBool);

//array to string
const arr = [1,2,4,6];
// console.log( typeof String(arr));

//object to string

const obj = {name:'Rose', age: 20}
// console.log(typeof String(obj));




///------ toSring method
//basic
const num1 = 25;
const strNum1 = num1.toString()
// console.log(typeof strNum1)

//bool

const boolval = false;
// console.log(typeof boolval.toString());



///----

//converting string to number

///----

//parseInt()
const pixel = '52px';
const cnrtVal = parseInt(pixel)

console.log(pixel + 10);

const pixel1 = "52.3px"
const cnrtVal1 = parseFloat(pixel1)

console.log(pixel1 + 10);

const ageInput = "20";
const conVal2 = Number(ageInput)
console.log(conVal2 + 10)

const score = '100';
const con = +score
console.log(con + 100);