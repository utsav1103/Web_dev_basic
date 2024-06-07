//accessing parent elements
//>>>>


const parentEl = document.getElementById("parent");
//accessing grandparent
const grandparent = parentEl.parentNode;

// const grandparentEl = document.getElementById("grandparent");
// console.log(grandparentEl);
// console.log(parentEl.parentNode);



//>>>>>accessing child elements
//>>>>>

const firstChildEl = parentEl.firstChild;
const lastChildEl = parentEl.lastChild;
// console.log(firstChildEl);
// console.log(lastChildEl);

//accessing element children only

const firstElementchild = parentEl.firstElementChild;
console.log(firstElementchild);

