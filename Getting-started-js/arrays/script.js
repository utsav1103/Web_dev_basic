//====

// creating array using array literal

// =====

//syntax

// const studentAges = [20, 30, 14, 21]
// console.log(studentAges);

// declaring an array of String

// const daysOfWeek = ['mon', 'tue', 'wed','thru', 'fri','sat','sun']
// console.log(daysOfWeek);


//  declaring an array of mix types 

// const mixedType = [20, 'life', true]

// console.log(mixedType);

// const emptyArray = [];







//-----
// Array using array constructor

//-----

// const emptyArr = new Array();

//  creating an array with predefined size (5)

// const sizeDefineArr = new Array(5)


// console.log(sizeDefineArr);

// creating an array with elements

// const fruitArr = new Array('Cherry','Strawberry','Grapes')
// console.log(fruitArr);


//  creating an array of mixed type

// const mixedType1 = new Array(1, false, 'Darlin')

// console.log(mixedType1);


//====

// creating an array using array.of()

// ====



// const numArr = Array.of(1,2,3,4,5)

 // creating an array with str

// const strArr = Array.of('utsav','vinjal','vishal','pandya','tiny')

 // creating an array of with mixed types

// const mixArr = Array.of('apple','True', true, false, 20)

// console.log(mixArr)


//--=-=-

// using Array.from()

//=-=-=-=-


const originalArr = [1,2,3]
const clone = Array.from(originalArr)
// console.log(clone);

// creating an array from an array like Object

const arrLike = {0:'a',1:'b',2:'c', length:3}
const convertedArr = Array.from(arrLike)
// console.log(convertedArr)



///====

//accessing the array

//=-=-=-

const studentAges = [20, 30, 14, 21]
const firstAge = studentAges[2]
const age = studentAges[studentAges.length - 1]
// console.log(age);



//=-=-=-

//push and unshift methods

//=-=-=
// push
const fruit = ['Cherry', 'Kiwi', 'Berries']
// console.log('original fruits', fruit);
const newFruit = fruit.push('Avacado')
// console.log('updated fruits', fruit);

//unshift

const fruits = ['Cherry', 'Kiwi', 'Berries']
// console.log('original fruits', fruit);
const newFruit1 = fruit.unshift('Avacado')
// console.log('updated fruits', fruit);



//=-=-=

// pop & shift

//=-=--=


const animal = ['lizard','Dogs','cats','pookies']
console.log('Original animals', animal);

const popAni = animal.pop()
console.log('After poping animal', animal);


const animal1 = ['lizard','Dogs','cats','pookies']
console.log('Original animals', animal1);

const popAni1 = animal.shift()
console.log('After shifting animal', animal1);

