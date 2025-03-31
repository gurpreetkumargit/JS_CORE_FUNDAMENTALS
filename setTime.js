// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] we need to print this array's element after every 1 sec

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using setTimeOut
// this method is good, but works well only with static data =
// for (let i = 0; i < numbers.length; i++) {
//   setTimeout(() => {
//     console.log(numbers[i]);
//   }, i * 1000);
// }

// using setTimeInterval

// let index = 0;

// setInterval(() => {
//   if (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
//   } else {
//     clearInterval();
//   }
// }, 100);


// using async/await

const handleUsingAsync = async (arr, delay) => {
  for (item of arr) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
    console.log(item);
  }
};

handleUsingAsync(numbers, 1000);
