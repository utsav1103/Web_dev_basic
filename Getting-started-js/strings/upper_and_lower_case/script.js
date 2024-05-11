const local = "Hello , I'm Utsav . WElcome to my webPage";
const result = local.toLowerCase()
console.log(result);

const local1 ="hey there sweet Heart , how's it going ?";
const result1 = local1.toUpperCase()
console.log(result1);

// case insensitive comparison

const string1 = 'javaScript';
const string2 = 'Javascript';
if(string1.toLocaleLowerCase() === string2.toLocaleLowerCase()){
    console.log('The strings are equal');
}



/// .length property

const myStr = 'hello, world'
const strLength = myStr.length;
console.log(strLength);

const emptyStr = "";
const result2 = emptyStr.length;
console.log(result2);

//string validation
const username = 'uvavava';
if(username.length >= 7){
    console.log('Valid username');
}else{
    console.log('Invalid username');
}
