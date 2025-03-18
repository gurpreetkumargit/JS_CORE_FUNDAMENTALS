// This is a keyword that is used to reference the object that is executing the current running object

// 1. on global level - It will be window. because on the top level its a window object in browser
// and normally it will return a global object reference

function printThis() {
  console.log("this 2", this);
}

printThis();

// here this object will be changed, now all the values inside user object will be this object
const user = {
  name: "Gurpreet",
  age: 24,
  hobbies: ["coding", "cricket"],
  // in a normal function this is referencing to nearest surrounding function
  userData: function () {
    console.log("this 3", this);
    console.log(this.name + " " + this.age);
  },
  // in a arrow function, the arrow function does not work same as normal function.
  // it does not have its own scope. so now in this case, THIS will refer to global object
  userData1: () => {
    console.log("this 4", this);
    console.log(this.name + " " + this.age);
  },

  // now arrowFunction will refer to the object of userData2 function and THIS object of userData2 is user
  // so we will get a correct output
  userData2: function () {
    const arrowFunction = () => {
      console.log("this 5", this);
      console.log(this.name + " " + this.age);
    };
    arrowFunction();
  },

  userData3: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(this.name);
      console.log(hobby);
    }, this);
  },
};

user.userData();
user.userData1();
user.userData2();
user.userData3();
