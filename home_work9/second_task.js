function regulusFunction() {
  return "Result regulus Function";
}

async function asynchFunction() {
  const result = await regulusFunction();
  return result;
}

asynchFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
