//>> nested timeout functons

// const task1 = (callback) => {
//     setTimeout(() => {
//         console.log("Task1 completed");
//         callback();
//     }, 3000);
// };

// const task2 = (callback) => {
//     setTimeout(() => {
//         console.log("Task2 completed");
//         callback();
//     }, 2000);
// };


// const task3 = (callback) => {
//     setTimeout(() => {
//         console.log("Task3 completed");
//         callback();
//     }, 1000);
// };


// //start the first task

// task1(function(){
//     //once the first one is completed stat the second one
//     task2(function(){
//         //once the second the completed start the third
//         task3(function(){
//             console.log("all the tasks completed");
//         });
//     });
// });



//>>>> fetdch user data(dummy)

const userData = {id: 1, name:'Tisaa'};
const userPosts = [{id:101, content:'Post 1'},{id:102, content:'Post 1'},];

const postComments = {
    101: ['comment 1', 'comment'],
    102: ['comment 1', 'comment'],
};

//fetching data
const fetchUserData = (userId, callback) =>{
    console.log('Fetching user data...');
    setTimeout(()=>{
        callback(userData);
    }, 1000);
};

//fetching post
const fetchUserPost = (userId, callback) =>{
    console.log('Fetching user posts...');
    setTimeout(()=>{
        callback(userPosts);
    }, 1000);
};

//fetching comment
const fetchPostComment = (postId, callback) =>{
    console.log("fetching posts comments...");
    setTimeout(() => {
        callback(postComments[postId] || []);
    }, 1000);
};


//initiate the process

fetchUserData(1, function(userData){
    // console.log(userData);
    console.log("user data", userData);
    fetchUserPost(userData.id, function(userPosts){
        console.log("user post", userPosts);
        userPosts.forEach(function (post) {
            console.log("Post", post);
            fetchPostComment(post.id, function (comments) {
                console.log("Comments", comments);
            });
        });
    });
});