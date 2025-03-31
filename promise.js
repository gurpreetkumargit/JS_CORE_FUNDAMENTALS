// Promise is an object that acts as a placeholder for a value that is really not present but soon its coming
// example hit an api call and process the data after we get the value. but how can we know when we can get data or
// when the request for data will finish
// so in this case promise helps to ensure the code flow even we have async events

const succeeded = false;

function hey() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hey, how are you");
      if (succeeded) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

function reply() {
  console.log("I am good");
}

hey()
  .then(() => {
    console.log("resolved: hey called successfully");
    reply();
  })
  .catch(() => {
    console.log("rejected: got an error");
  })
  .finally(() => {
    console.log("execution completed");
  });
