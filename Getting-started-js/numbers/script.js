
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



