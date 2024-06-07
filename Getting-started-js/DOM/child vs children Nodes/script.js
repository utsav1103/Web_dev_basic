//fetch the element with id="parent"

const parentEl = document.querySelector("#parent");
// console.log(parentEl.childNodes);

// parentEl.childNodes.forEach(node => console.log(node.nodeType));

// console.log(parentEl.children);

const convertedHtmlCollection = Array.from(parentEl.children)

convertedHtmlCollection.forEach(el => console.log(el));