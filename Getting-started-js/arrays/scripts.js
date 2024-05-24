/// mapping .map looping in array
//-=-=-=


// const numbers = [1,2,3,4,5,6]

// const newNumArrSqur = numbers.map(function(num , idx, arr){
//     return num * 10
// })

// console.log(newNumArrSqur);
/// 


const words = ['apple','pear','mango']
const conWord = words.map(function(word){
    return word.toUpperCase()
})
// console.log(conWord)











//=-=-=-=

// filter method in array

//=-=-=-=-

const numbers = [1,2,3,4,5,6,7,8,9,0]

const even = numbers.filter(function(num){
    //filter logic
    return num % 2 === 0
})
// console.log(even);


const mix = [0,1,'app',"",null,'kiwi']

const truth = mix.filter(function(value){
    return Boolean(value)
})
console.log(truth);
