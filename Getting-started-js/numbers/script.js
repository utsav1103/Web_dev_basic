
//converting a numver in string

const age = 30
const ageStr = age.toString()
// console.log("your age is : " + ageStr);

const price = 10.99;

//  const disPrice = "The price is $ " + price.toString(); or
const disPrice = `The price is $${ price}`;
// console.log(disPrice);


const deciNum = 10;
const binStr = deciNum.toString(2)

// console.log(binStr);

//bigInt

const bigInt = BigInt('590839058239058')
// console.log(bigInt.toString());









///------

// toFixed method

///------


const proPri = 49.9554
const forPri = proPri.toFixed(2)

// console.log(forPri);

const pie = 3.14139
const roPie = pie.toFixed(3)

// console.log(roPie);

const weiKg = 70
const hei = 1.85
const Bmi =(weiKg / (hei ** 2))

console.log(Bmi.toFixed(2));



///----

// ToExponential() Method

///=====


const avoNum = 6.077898908e23

const sciNum = avoNum.toExponential()

// console.log(sciNum);

const num = 10;
const expo = num ** 2 //10*10

// console.log(expo);




//====

// using parseint () method again

//====

const userInput = '53'
const userAge = parseInt(userInput, 10)


const priceText = "price: 100 USD"

const extract = parseInt(priceText.replace("price:","").replace("USD",""), 10)

//====

// using parseFloat () method again

//====

const check = "99.99";

const price1 = parseFloat(check.replace("$",""))

const tem = "temperature: 42.5c";
const actualtem = parseFloat(tem.replace("temperature:","").replace("c",""))

console.log(actualtem);
//Calculating Grade Point Average (GPA)
const inputGPA ="3.8";
const parsedGPA =parseFloat(inputGPA)

// if(isNaN(parsedGPA)){
//     console.log('Inavalid GPA input');
// }else{
//     console.log(`Your GPA is ${parsedGPA}`);
// }

//Calculating Savings After a Transaction
const initialSavings = '1000';
const widthdrawal = 'Hello'
const newSavings = parseFloat(initialSavings) - parseFloat(widthdrawal);

// if(isNaN(newSavings)){
//     console.log('Invalid transaction');
// }else{
//     console.log(`Your new savings amount is ${newSavings}`);
// }
//Computing the Area of a Circle

const radiusInput = '7';
const radius = parseFloat(radiusInput)
const area = Math.PI * Math.pow(radius, 2);
// if(isNaN(area)){
//     console.log('Invalid radius');
// }else{
//     console.log(`The area of the circle is ${area}`);
// }







