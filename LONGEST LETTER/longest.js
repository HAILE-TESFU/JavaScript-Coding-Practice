function longest(string) {
  let countMax = 0;
  let countSetter = 0;

  const longestLetter = string.split("").forEach((item, index, array) => {
    array.forEach((item1, index2, array2) => {
      //index2 = indexSetter;
      if (item === item1) {
        countSetter++;
      }
    });
    if (countSetter > countMax) {
      countMax = countSetter;
    }

    countSetter = 0;
  });
  return countMax;
}

console.log(longest("aaBBBBcDDee"));
console.log(longest(""));
console.log(longest("aaBBcDDDDDDeeFFFFFFFFg"));
console.log(longest("a"));
console.log(longest("aBBBccD"));
