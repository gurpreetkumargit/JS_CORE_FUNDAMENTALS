const array = [1, 2, 3, 4, 5, 6];
const array1 = [1, 2, 3, 4, 5, 6];

// erasing forEach from Array prototype
// simulate browser incompatibility
Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
  // creating own forEach method
  // polyfill...

  Array.prototype.forEach = function (callBackFunc) {
    console.log("this", this);
    for (let val of this) {
      callBackFunc(val);
    }
  };
}

array.forEach((arr) => {
  console.log(arr);
});
