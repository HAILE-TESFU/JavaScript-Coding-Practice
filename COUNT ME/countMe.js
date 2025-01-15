//A String is given. Return the number of "Me" in this string. Count 'Me" only if none "x" is anywhere in front of it.

function countMe(string) {
  let newString = string;
  if (string.includes("x")) {
    newString = string.substring(0, string.indexOf("x"));
  }
  let me = Array.from(newString.matchAll(/Me/g));
  // //console.log(me);
  // for (let i = 0; i < string.length; i++) {
  //   //console.log(string.at(i+1))
  //   if (
  //     string.at(i) === "x" &&
  //     string.at(i + 1) === "M" &&
  //     string.at(i + 2) === "e"
  //   ) {
  //     if (string.includes("x") && string.indexOf("x") < string.indexOf("Me")) {
  //       me.pop();
  //     }
  //     me.pop();
  //   }
  // }
  return me.length;
}

module.exports = countMe;

console.log(countMe("Meishere"));
console.log(countMe("thisisxMe"));
console.log(countMe("MeisxMe"));
console.log(countMe("xMeisxMe"));
console.log(countMe("MeixsyouMe"));
console.log(countMe("MeMeixsMeyouMe"));
console.log(countMe("MeMeMeixsMeyouMe"));
