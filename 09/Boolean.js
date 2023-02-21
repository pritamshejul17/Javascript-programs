
let myString = "Hello, World!";
if (myString) {
  console.log("Truthy value");
}

let myNumber = 42;
if (myNumber) {
  console.log("Truthy value");
}

let myObject = { name: "John", age: 30 };
if (myObject) {
  console.log("Truthy value");
}


let myString1 = "";
if (!myString1) {
  console.log("Falsy value");
}

let myNumber1 = 0;
if (!myNumber1) {
  console.log("Falsy value");
}