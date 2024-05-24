/// mapping .map looping in array
//-=-=-=


const numbers = [1,2,3,4,5,6]

const newNumArrSqur = numbers.map(function(num , idx, arr){
    return num * 10
})

// console.log(newNumArrSqur);
/// 


const words = ['apple','pear','mango']
const conWord = words.map(function(word){
    return word.toUpperCase()
})
// console.log(conWord)