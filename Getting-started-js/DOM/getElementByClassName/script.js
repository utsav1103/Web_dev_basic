//selecting all elements with the class name "fiction"
//>>>>

const fictionBooks = document.getElementsByClassName("fiction");


//selecting all elements with the class name "non-fiction" within the nonfiction section
const nonFictionEl = document.getElementById("nonFictionSection");
const nonFictionBooksInSectionEl = nonFictionEl.getElementsByClassName("non-fiction");

// console.log(nonFictionBooksInSectionEl[1]);

//first convert into an array

const fictionBooksElArr = Array.from(fictionBooks) ;
// console.log(fictionBooksElArr);
const fictionBooksElTitle = fictionBooksElArr.map((el) => el.innerHTML);
console.log(fictionBooksElTitle);
