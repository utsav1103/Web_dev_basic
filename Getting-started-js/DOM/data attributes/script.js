//using `getAttribute` and    `setAttribute`

const userCard = document.getElementById("userCard");
// const userId = userCard.getAttribute('data-user-id');
// const userRole = userCard.getAttribute('data-user-role');
// console.log(userId);
// console.log(userRole);


userCard.setAttribute("data-user-role", "super-admin");
// console.log(userCard);


//using data set
const userRole2 = userCard.dataset.userRole;
const userId2 = userCard.dataset.userId;
console.log(userId2);


