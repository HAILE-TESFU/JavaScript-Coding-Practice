function isPangram(string) {
  let alphabets = [];
//   const realAlphabetes = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

  const givenString = string.split("");
  console.log(givenString);

  givenString.forEach((item, i, arr) => {
    givenString.forEach((itemAlphabet, iAlphabet, arrAlphabet) => {
      if (item === itemAlphabet || item === " ") {
        // console.log(item)
       givenString.shift()
       alphabets = givenString;
      }
    });
  });
  
  console.log(alphabets);
  if (alphabets.length === 26) {
    return true;
  } else return false;
}

// function chechAlphabet(alpha) {
//     alphabets.forEach((item, i, arr) => {
//       if (arr.length === 0) {
//         alphabets.push(item);
//       } else if (alpha !== item) {
//         alphabets.push(alpha);
//       }
//     });
//   }

const string1 = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(string1));
