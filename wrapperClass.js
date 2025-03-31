function add(a, b) {
  return a + b;
}

function wrapper(func) {
  return function (...args) {
    console.log(`logging: ${func.name} with args: ${args}`);
    let added = func(...args);
    console.log(`op: ${added}`);
  };
}

const logger = wrapper(add);

logger(5, 6);

function slidingWindow(array, k) {
  let maxArray = [];
  for (let i = 0; i <= array.length - k; i++) {
    let subArray = array.slice(i, i + k);
    maxArray.push(subArray[0] + subArray[1] + subArray[2]);
  }
}
