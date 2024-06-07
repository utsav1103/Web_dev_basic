//>>>>
//selecting all product cards using querySelectorAll

const productCardEl = document.querySelectorAll(".product-card");
// console.log(productCardEl);
const productNameEl = document.querySelectorAll(".product-name");
// console.log(productNameEl);

productNameEl.forEach((el) => {
    // console.log(el.innerHTML)
});


//select all prices of laptop category porducts

const laptopPricesEl = document.querySelectorAll('[data-category = "laptop"] .product-price');
// console.log(laptopPricesEl);

laptopPricesEl.forEach((el) => {
    // console.log(el.innerHTML);
})


//selecting all product with rating above 4.6

const highestRatingEl = document.querySelectorAll('[data-rating="4.7"] ,[data-rating="4.8"]');
console.log(highestRatingEl);

highestRatingEl.forEach(el => console.log(el.innerHTML))