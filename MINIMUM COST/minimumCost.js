// You are given a two-dimensional array 'arr' of integers, where each element in the array represents the cost of travelling from that cell to its adjacent cells. You start at the top-left corner of the array arr[0][0] and you need to reach the bottom-right corner arr[m-1][n-1]. Your task is to find the minimum cost of travelling from the top-left corner to the bottom-right corner.

// you can only move down or right of a cell. you can assume that the input array is nonempty and that there is at least one valid path from top-left corner to bottom-right corner.

// function minimumCost(arr) {
//   let costs = [];
//   arr.forEach((item, index, array) => {
//     item.forEach((item1, index1, arrItem) => {
//       if (costs.length === 0) {
//         costs.push(item1);
//       }els
//     });
//   });
// }

function minCostPath(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));
  //console.log(dp)

  dp[0][0] = arr[0][0];

  //console.log(dp)
  // Initialize the first row
  for (let i = 1; i < n; i++) {
      dp[0][i] = dp[0][i - 1] + arr[0][i];
  }
console.log(dp)
  // Initialize the first column
  for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + arr[i][0];
  }

  // Fill the rest of the dp array
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          dp[i][j] = arr[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
  }
console.log(dp)
  return dp[m - 1][n - 1];
}

// Example usage:
let arr = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

console.log(minCostPath(arr));