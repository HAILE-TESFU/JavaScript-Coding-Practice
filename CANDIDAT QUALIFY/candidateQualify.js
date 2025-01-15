// Given is an array times and a number totalTime. The array times contains the time taken by a candidate to solve each question in an imaginary coding interview, and totalTime is the total time taken by the candidate to complete the interview.
// The interview has the following criteria:
// •	The interview contains 8 questions in the order: easy, easy, easy, medium, medium, medium, hard, hard.
// •	The maximum allowed time for the entire interview, including a buffer time, is 140 minutes.
// The maximum time allowed for each question is as follows:
// •	Easy questions: 10 minutes each.
// •	Medium questions: 15 minutes each.
// •	Hard questions: 20 minutes each.
// The function should return "qualified" if the candidate meets all the criteria. Otherwise, it should return "disqualified".

function isWQualified(times, totalTime) {
  let qulification = "";
  const bufferTime = 25;

  //   times.forEach((item, index, array) => {
  //     //console.log(index)
  //     if (index < 3 && item > 10 ) {
  //         console.log(item)
  //       qulification = "disqualified";
  //     } else if (3 <= index < 6 && item > 15 ) {
  //         console.log(index)
  //       qulification = "disqualified";
  //     } else if (index >= 6 && item > 20 ) {
  //         console.log(index)
  //       qulification = "disqualified";
  //     } else qulification = "qualified";
  //   });
  //   return qulification;
  for (let i = 0; i < times.length; i++) {
    if (i < 3 && times[i] > 10) {
      qulification = "disqualified";
    } else if (3 <= i < 6 && times[i] > 15) {
      qulification = "disqualified";
    } else if (i >= 6 && times[i] > 20) {
      qulification = "disqualified";
    } else qulification = "qualified";
  }
  return qulification
}

console.log(isWQualified([8, 9, 10, 13, 14, 15, 18, 19], 110));
console.log(isWQualified([8, 11, 10, 13, 14, 15, 18, 19], 110));
console.log(isWQualified([9, 10, 8, 14, 15, 13, 19, 20], 108));
console.log(isWQualified([9, 10, 8, 14, 15, 13, 19, 20], 141));
console.log(isWQualified([9, 11, 7, 14, 15, 16, 18, 19], 109));
console.log(isWQualified([10, 10, 10, 15, 15, 15, 20, 20], 140));
console.log(isWQualified([8, 9, 914, 15, 14, 19, 21], 109));
console.log(isWQualified([8, 7, 10, 14, 13, 15, 18, 19], 104));
