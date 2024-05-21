
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
console.log(bigInt.toString());
