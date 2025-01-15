// //Write a fuction uniquePalindromSubstrings that take a string "str" as input and returns an array of all unique palindrome substrings in the string.

// A substrings is contigous sequence of characters within a String. For example , the string "abc" has "a","b", "c", "ab", "bc" and "abc".

// The function should return an array of all unique palindrome substrings in the input string. If there are no unique palindrome substrings in the input string, the function should return an empty array.
// Note that palindrome substring should be considered unique even if the occur multiple times in the input string.

// return the array sorted ASC.

function uniquePalindromeSubstring(str) {
  let substrings = [];
  let palindrome = [];
  let k = 1;

  for (let i = 0; i < str.length; i++) {
    for (j = k; j <= str.length; j++) {
      substrings.push(str.substring(i, j));
      //console.log(str.substring(i, j));
      if (isPalindrome(str.substring(i, j)) && !palindrome.includes(str.substring(i, j))) {
        palindrome.push(str.substring(i, j));
      }
    }
    k++;
  }
  // console.log(substrings);
  // console.log(palindrome);
  return palindrome.sort();
}
function isPalindrome(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str.at(i);
  }
  //console.log(newString)
  if (str === newString) {
    return true;
  } else return false;
}
//console.log(isPalindrome("mom"));
//uniquePalindromeSubstring("abcbabcba");

console.log(uniquePalindromeSubstring("abcbabcba"));
