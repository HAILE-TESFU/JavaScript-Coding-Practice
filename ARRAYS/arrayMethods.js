// //array length
 //const fruits = ["Banana", "Orange", "Apple", "Mango","Beles","wine","lemon"];
// let size = fruits.length;
// console.log(size)

// //array toString()
// //converts an array to string of comma separated

// console.log(fruits.toString());

// //at()
// //it works like [].
// //returns array value at a given index.
// console.log(fruits.at(2))

// //join()
// //work like toString() but with prefered separator

// console.log(fruits.join("-"));

// //pop()  and push()
// // pop() removes last element and returns it
// //push() add an element at the end and returns array length

// console.log(fruits.push('Haile','Tekle'));
// console.log(fruits)
// console.log(fruits.pop(2));
// console.log(fruits)

// // shift() and unshift()
// // shift() removes first element and returns it
// //unshift() add an element at the begining and returns array length
// console.log(fruits.shift());
// console.log(fruits)
// console.log(fruits.unshift("Banana"))
// console.log(fruits)

// //concat()
// // joins array to a single array
// it does not mutate the array
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));
// console.log(arr1.concat('Peter'));
// console.log(arr1)

// //copywithin()
// //copyWithin(target, start(default 0), end (defaualt arr length))
// it does not change array length
// mutates the array
// console.log(fruits)
// console.log(fruits.copyWithin(2,1));
// console.log(fruits)
// console.log(fruits.copyWithin(0));
// console.log(fruits)

// const array = [0,1,2,3,4,5,6,7,8,9,10];
// const array1 = [0,1,2,3,4,5,6,7,8,9,10];
// const array2 = [0,1,2,3,4,5,6,7,8,9,10];
// const array3 = [0,1,2,3,4,5,6,7,8,9,10];
// const array4 = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(array.copyWithin(2));
// console.log(array1.copyWithin(2,3));
// console.log(array2.copyWithin(2,0,4));
// console.log(array3.copyWithin(5));

// //flat()
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// const stringArray = [["Haile","Tekle"],["Haile","Tekle", "Fkre"]];
// console.log(stringArray.flat());
// console.log(stringArray)

// //flatMap();
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x =>  x * 10);
// console.log(newArr);
// console.log(myArr);

//splice(starting index, number of items to be removed, items to be added );
//mutate the array
//returns items removed
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.splice(2, 0, "Lemon", "Kiwi"));
// console.log(fruits1)
// console.log(fruits1.splice(2, 1, "Lemon", "Kiwi"))
// console.log(fruits1)

//toSpliced(starting index, number of items to be removed, items to be added );
//immutate the array
//returns the new array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toSpliced(2, 0, "Lemon", "Kiwi"));
// console.log(fruits)
// console.log(fruits.toSpliced(2, 1, "Lemon", "Kiwi"))
// console.log(fruits)

// //slice(starting (default is 0), ending (default is array length))
// //creates a new array and returns the new array including the indexed input
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus)
// console.log(fruits);
// console.log(fruits.slice(3));
// console.log(fruits.slice(0));
// console.log(fruits.slice(1));
// console.log(fruits.slice(2));
// console.log(fruits);
// console.log(fruits.slice(2,3));
// console.log(fruits.slice(2,2));
// console.log(fruits.slice());

//indexOf(item, start)
//retruns -1 if item not found
//if item is more than it returns the first value
//lastIndexOf() same as indexOf() but returns the last item

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple", -3);
// console.log(fruits.lastIndexOf("Aple"));

// console.log(position);

// //includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("Mangos"));

// //find()
// // returns the first value that satisfies the condition

// const array = [1,34,2,45,6,78,54];
// const evenNumbers = array.find((item,index, arr)=>item%2 === 0);
// console.log(evenNumbers);

// //findIndexOf()
// // returns the index of first value that satisfies the condition

// const array = [1,34,2,45,6,78,54];
// const evenNumbers = array.findIndex((item,index, arr)=>item%2 === 0);
// console.log(evenNumbers);


// //findLast()
// // returns the index of first value that satisfies the condition

// const array = [1,34,2,45,6,78,54];
// const evenNumbers = array.findLast((item,index, arr)=>item%2 === 0);
// console.log(evenNumbers);


//findLastIndexOf()
// returns the index of first value that satisfies the condition

// const array = [1,34,2,45,6,78,54];
// const evenNumbers = array.findLastIndex((item,index, arr)=>item%2 === 0);
// console.log(evenNumbers);