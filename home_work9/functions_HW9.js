function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result Function 1");
    }, 2500);
  });
}

function asyncFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result Function 2");
    }, 5000);
  });
}

function asyncFunction3() {
  return Promise.resolve("Result Function 3");
}

asyncFunction1()
  .then((result1) => {
    console.log(result1);
    return asyncFunction2();
  })
  .then((result2) => {
    console.log(result2);
    return asyncFunction3();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
