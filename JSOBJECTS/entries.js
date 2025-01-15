const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let text = Object.entries(person);

  console.log(text)

  const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
  const myObj = Object.fromEntries(fruits);
  console.log(myObj)
  console.log(Object.fromEntries(text));


//   // Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Get Properties
//   let descriptor = Object.getOwnPropertyDescriptor(person,'age','eyeColor');
//   console.log(descriptor)

// const Input = {"Ryan", "Kieran", "Jason", "Yous"};
// const Output = {"Ryan", "Yous"}

// const persons = Object.entries(Input);
// console.log(persons)

// Create an Object


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Get the Keys
// const keys = Object.keys(person);

// console.log(keys)


// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);


// console.log(fred)

// const fred2 = new employee("Fred Flintstone", "Caveman", 1970,2000);


// console.log(fred2)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text)

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// const keys = Object.entries(person).toString();
// console.log(keys)

// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// const keys2 = Object.toString(person);
// console.log(keys2)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();
// console.log(myArray)
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// const myArray1 = fruits;
// console.log(myArray1)

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.valueOf(person);
// console.log(text)