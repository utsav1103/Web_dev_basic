//first funciton returing a promise

function stepOnePromise() {
  return new Promise((resolve) => {
    resolve("Step 1 completed");
  });
}

function stepTwoPromise() {
  return new Promise((resolve) => {
    resolve("Step 2 completed");
  });
}

function stepThreePromise() {
  return new Promise((resolve) => {
    resolve("Step 3 completed");
  });
}

///>>>>chaining

stepOnePromise()
  .then((resultFromP1) => {
    console.log(resultFromP1);
    return stepTwoPromise();
  })
  .then((resultFromP2) => {
    console.log(resultFromP2);
    return stepThreePromise();
  })
  .then((resultFromP3) => {
    console.log(resultFromP3);
  }).catch((err)=>{
    console.log(err);
  })
