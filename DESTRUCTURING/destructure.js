//array destructuring

const person = ["Haile", "Tesfom", "Tekle", "Zerai"];

const [a, b, c, d] = person;

console.log(a + b +c+d);

//Object Destrucring

const person2 = {fisrtName: "haile",lastName: "tesfom", age:30};

const {fisrtName,lastName,age} = person2;

console.log(fisrtName+lastName+age)