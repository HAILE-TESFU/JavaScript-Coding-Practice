//String length

// const text = "I am a happy, handsome and strong boy";

//console.log(text.length);

//charAt(), charCodeAt(), at() and []
// all uses to find the character at an index

// console.log(text.charAt(5));
// console.log(text.charCodeAt(5));
// console.log(text.at(5));
// console.log(text[5]);

// slice(start,end), substring(start,end), substr(start, string length);

// console.log(text.slice(5, 13));
// console.log(text.substring(5, 13));
// console.log(text.substr(5, 13));

// console.log("differnt try");

// console.log(text.slice(5));
// console.log(text.substring(5));
// console.log(text.substr(5));

// console.log("differnt try");

// console.log(text.slice(-13,-5));
// console.log(text.substring(-13,-5));
// console.log(text.substr(-13,-5));

const text = "I am a happy, Am handsome and strong boy";

//indexOf(), lastIndex(),
// both takes a second arguement starting search
// console.log(text.indexOf('a'));
// console.log(text.indexOf('p'));
// console.log(text.indexOf('P'));
// console.log(text.indexOf('b'));

// console.log(text.lastIndexOf('a'));
// console.log(text.lastIndexOf('p'));
// console.log(text.lastIndexOf('P'));
// console.log(text.lastIndexOf('b'));

// console.log(text.indexOf('am'));
// console.log(text.indexOf('happy'));
// console.log(text.indexOf('P'));
// console.log(text.indexOf('handsome'));

//search()
//only takes one arguement
// console.log(text.search('am'));
// console.log(text.search('happy'));
// console.log(text.search('P'));
// console.log(text.search('handsome'));

//match(), matchAll()
console.log(text.match(/am/g));
console.log(text.match(/am/gi));
console.log(text.match(/am/));
console.log(text.match('happy'));
console.log(text.match('P'));
console.log(text.match('handsome'));

console.log(text.matchAll(/am/g));
console.log(text.matchAll('happy'));
console.log(text.matchAll('P'));
console.log(text.matchAll('handsome'));



